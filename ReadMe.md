# 🧠 SmartAutoLinker (SAL) — Minimal & Fast Obsidian Auto-Linker

**SmartAutoLinker (SAL)** is a lightweight, silent plugin for Obsidian that **automatically links exact phrases** across your vault as you write — no UI clutter, no fuzzy distractions. Just simple, background linking. Ideal for writers, researchers, and minimalists who want fast, no-friction knowledge weaving.

> ✅ Works quietly in the background  
> ✅ Supports multi-word phrase linking  
> ✅ No dropdowns, no prompts, no UI noise  
> ✅ Instant and automatic  
> ✅ Zero configuration needed

---

## 🔍 What Does It Do?

Whenever you type a phrase that already exists as a note title, SmartAutoLinker detects it and **instantly wraps it in Obsidian's `[[wikilink]]` syntax** — automatically linking your ideas together.

- **Example**:  
   You have a file named `French Revolution.md`.  
   Typing “French Revolution” in any note will instantly convert it to `[[French Revolution]]`.

### ⚠️ Strict Match Only

> SAL uses **strict 100% exact matching** only.  
> It will *not* link partially matched phrases, fuzzy matches, or similar-sounding words.

This makes it reliable, fast, and fully predictable.

---

## ⚖️ SAL vs. PhraseSync: A Quick Comparison

| Feature                            | **SmartAutoLinker (SAL)** | **PhraseSync**                      |
|------------------------------------|----------------------------|-------------------------------------|
| Auto-linking                       | ✅ Yes                     | ✅ Yes                              |
| Phrase matching                    | ✅ Exact only (100%)       | ✅ Fuzzy + Exact + Contextual       |
| Fuzzy search                       | ❌ No                      | ✅ Yes (with scoring logic)         |
| Suggestion dropdown                | ❌ No                      | ✅ Yes                              |
| UI / settings page                 | ❌ None                    | ✅ Configurable                     |
| Trigger control                    | ❌ No                      | ✅ Custom triggers & toggle         |
| Language support                   | ✅ All languages           | ✅ All languages                    |
| Mobile support                     | ✅ Yes                     | ✅ Yes                              |
| Performance impact                 | ⚡ Ultra-lightweight       | 🧠 Heavier but smarter              |
| Best for…                          | 📚 Simplicity lovers       | 🔬 Power users, researchers         |
| Open source                        | ✅ Yes                     | ✅ Yes                              |

---

## 📦 Installation

> **Manual Install** (Until available on Obsidian Plugin Gallery)

1. Download the latest release from the [Releases](https://github.com/digvijay-s-todiwal/smartautolinker/releases) tab.
2. Extract the folder into your `.obsidian/plugins` directory.
3. Enable **SmartAutoLinker** from Settings → Community Plugins.

---

## 🌐 PhraseSync: The Advanced Sibling Plugin

**PhraseSync** is the feature-rich evolution of SmartAutoLinker.

If you're looking for:
- Smart phrase suggestions
- Fuzzy matching with scoring
- Contextual linking based on sentence structure
- A full plugin settings panel
- Control over when and how links appear

➡️ Check out [**PhraseSync on GitHub**](https://github.com/digvijay-s-todiwal/phrasesync)

You can use **either**, or both — depending on your needs.

---

## 💡 Why Two Plugins?

Some users want a **clean, no-UI, instant-linking experience** — SAL delivers that.

Others want **AI-style smart suggestions, control, and customization** — that’s PhraseSync.

By maintaining both, we let users choose their ideal knowledge linking workflow.  
**Future updates to PhraseSync may offer a “Lite Mode” based on SAL’s core.**

---

## 🛠️ Developer Notes

- Written in TypeScript
- No UI components
- Automatically parses sentences and links exact matches
- Does not require indexing
- Plugin lifecycle optimized for minimal CPU usage

---

## 🤝 Contributing

SmartAutoLinker is open source and community-first.  
We welcome PRs, feature ideas, and issue reports!

→ See [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 📄 License

MIT License — use freely, fork openly, credit kindly.

---

## ✨ Credits

Built with clarity by [Digvijay S. Todiwal](https://thedigvijay.com)  
Part of the [AAZADI Project](https://thedigvijay.com/aazadi) — spreading knowledge with purpose.
