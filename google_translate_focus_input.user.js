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

(function() {
    'use strict';

    // First textarea element is the source input currently, may change/break in the future
    const textarea = document.getElementsByTagName('textarea')[0]
    if (textarea) {
        document.addEventListener('keydown', (event) => {
            // Don't know how to test if user has input focus, textarea tag test for now
            // key.length is a kinda hacky way to determine if it's a printable char
            if (
                document.activeElement?.type !== 'textarea'
                && !event.repeat
                && (
                    event.key.length === 1
                    || event.key === 'Backspace'
                    || event.key === 'Delete'
                )
            ) {
                textarea.focus()
            }
        })
    }
})();
