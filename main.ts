import { Plugin } from "obsidian";

export default class SmartAutoLinker extends Plugin {
	index: Map<string, string> = new Map();

	async onload() {
		console.log("🔗 SmartAutoLinker loaded");
		await this.buildIndex();

		this.registerEvent(
			this.app.workspace.on("active-leaf-change", () => {
				this.watchEditor();
			})
		);

		this.watchEditor();
	}

	async buildIndex() {
		const files = this.app.vault.getMarkdownFiles();
		this.index.clear();

		for (const file of files) {
			const content = await this.app.vault.read(file);
			const lines = content.split("\n");

			// Note title
			this.index.set(file.basename.toLowerCase(), `[[${file.basename}]]`);

			for (const line of lines) {
				// # Headings
				const headingMatch = line.match(/^(#+)\s+(.*)/);
				if (headingMatch) {
					const heading = headingMatch[2].trim();
					this.index.set(heading.toLowerCase(), `[[${file.basename}#${heading}]]`);
				}

				// ^block-id
				const blockMatch = line.match(/\^([a-zA-Z0-9-]+)/);
				if (blockMatch) {
					const blockId = blockMatch[1];
					this.index.set(`^${blockId}`, `[[${file.basename}^${blockId}]]`);
				}
			}
		}
		console.log("🔎 Index built with", this.index.size, "entries");
	}

	watchEditor() {
		const leaf = this.app.workspace.activeLeaf;
		if (!leaf) return;

		const view = leaf.view;
		//@ts-ignore
		const editor = view.sourceMode?.cmEditor;
		if (!editor) return;

		editor.on("change", async (instance: any, change: any) => {
			const cursor = editor.getCursor();
			const wordRange = editor.findWordAt(cursor);
			const word = editor.getRange(wordRange.anchor, wordRange.head).trim().toLowerCase();

			if (this.index.has(word)) {
				const link = this.index.get(word)!;

				// Avoid linking again
				const line = editor.getLine(cursor.line);
				if (!line.includes(link)) {
					editor.replaceRange(link, wordRange.anchor, wordRange.head);
					console.log("🔗 Linked:", word, "→", link);
				}
			}
		});
	}
}
