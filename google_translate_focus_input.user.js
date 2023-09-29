// @ts-check
// ==UserScript==
// @name           Google Translate Focus Input On Type
// @namespace      https://github.com/Legend-Master
// @version        0.2
// @author         Tony
// @description    Focus input area on type for Google Translate
// @description:zh 在 Google Translate 输入的时候聚焦输入框
// @homepage       https://github.com/Legend-Master/Google-Translate-Focus-Input
// @icon           https://www.google.com/s2/favicons?sz=64&domain=translate.google.com
// @updateURL      https://github.com/Legend-Master/Google-Translate-Focus-Input/raw/main/google_translate_focus_input.user.js
// @downloadURL    https://github.com/Legend-Master/Google-Translate-Focus-Input/raw/main/google_translate_focus_input.user.js
// @supportURL     https://github.com/Legend-Master/Google-Translate-Focus-Input/issues
// @match          https://translate.google.tld/*
// @exclude-match  https://translate.google.tld/_/*
// @grant          none
// ==/UserScript==

/** @type {HTMLTextAreaElement | undefined} */
let textarea
document.addEventListener('keydown', (event) => {
	if (event.repeat) {
		return
	}
	// Ignore control c
	if (event.ctrlKey && event.key === 'c') {
		return
	}
	// Don't know how to test if user has input focus, textarea tag test for now
	if (document.activeElement instanceof HTMLTextAreaElement) {
		return
	}
	// key.length is a kinda hacky way to determine if it's a printable character
	if (event.key.length === 1 || event.key === 'Backspace' || event.key === 'Delete') {
		// Don't know why sometimes it deletes and re-adds the textarea
		if (!textarea?.isConnected) {
			// First textarea element is the source input currently, may change/break in the future
			textarea = document.getElementsByTagName('textarea')[0]
		}
		textarea?.focus()
	}
})
