import Vue from 'vue/dist/vue.esm.js';

import { getModel } from '../../main.js';

import usingHeader from '../../../components/using-header/using-header.vue';

import axios from 'axios';

document.addEventListener('DOMContentLoaded',
    function () {
        const data = getModel();
        data.tgHover = false;
        data.mailHover = false;
        data.phoneHover = false;
        data.hhHover = false;
        data.gitHover = false;
        data.workText = '';
        data.enterLetter = '';
        data.techStackHidden = false;
        data.experience = -1;
        data.resumeText = [
            { c: 'Р', t: 0 },
            { c: 'Е', t: 0 },
            { c: 'З', t: 0 },
            { c: 'Ю', t: 0 },
            { c: 'М', t: 0 },
            { c: 'Е', t: 0 },
        ]
        data.validPageSize = false;

        const backend = 'BACKEND';
        const sql = 'SQL';
        const desktop = 'DESKTOP';
        const frontendRu = 'АКЩТЕУТВ';
        const frontend = 'FRONTEND';
        const fullstack = 'FULLSTACK';
        const vm = new Vue({
            components: {
                usingHeader
            },
            el: '#global-wrapper',
            data: data,
            mounted: function () {
                let app = this;
                app.setWorkText();
                setInterval(function () {
                    app.setWorkText();
                }, 17850);
                setInterval(function () {
                    app.setEnterLetter();
                }, 500);
                setInterval(function () {
                    app.editResumeHead();
                }, 2000);
                window.addEventListener("scroll", app.handleScrollForExpHead);
                window.addEventListener("resize", app.windowSizeChanged);
                app.windowSizeChanged();
            },
            beforeDestroy: function () {
                window.removeEventListener("scroll", app.handleScrollForExpHead);
                window.removeEventListener("resize", app.windowSizeChanged);
            },
            methods: {
                tgDivClickHandle: function () {
                    this.$root.$refs["tg-link"].click();
                },
                mailDivClickHandle: function () {
                    this.$root.$refs["mail-link"].click();
                },
                gitDivClickHandle: function () {
                    this.$root.$refs["git-link"].click();
                },
                hhDivClickHandle: function () {
                    this.$root.$refs["hh-link"].click();
                },
                setWorkText: function () {
                    let timeout = 200;
                    this.workText = '';
                    let variables = [backend, sql, desktop, frontendRu, frontend, fullstack];
                    for (let y = 0; y < variables.length; y++) {
                        let word = variables[y];
                        for (let i = 0; i < word.length; i++) {
                            setTimeout(() => this.workText += word[i], timeout);
                            timeout += 200;
                        }
                        timeout += word === frontendRu ? 100 : 750;
                        for (let i = 0; i < word.length; i++) {
                            setTimeout(() => this.workText = this.workText.slice(0, -1), timeout);
                            timeout += 100;
                        }
                        timeout += 200;
                        this.workText = '';
                    }
                },
                setEnterLetter: function () {
                    this.enterLetter = '|';
                    setTimeout(() => this.enterLetter = '', 250);
                },
                getLanguages: function () {
                    return ['C#',
                        'MVC',
                        'WinForms',
                        '.NET 6',
                        '.NET 8',
                        '.NET Core 2.*',
                        '.NET Framework 4.*',
                        'PostgreSQL',
                        'MSSQL',
                        'ClickHouse',
                        'RabbitMQ',
                        'Docker',
                        'bash',
                        'js',
                        'Vue2',
                        'CSS',
                        'HTML'
                    ]
                },
                editResumeHead: function () {
                    let app = this;
                    const randomInt = Math.floor(Math.random() * app.resumeText.length);
                    let oldLetter = JSON.parse(JSON.stringify(app.resumeText[randomInt]));
                    let randomChars = "@$%#!*&()_+~";
                    let timeout = 50;
                    for (let i = 0; i < 7; i++) {
                        setTimeout(function () {
                            app.resumeText[randomInt].c = randomChars.charAt(Math.floor(Math.random() * randomChars.length));
                        }, timeout);
                        timeout += 100;
                    }
                    for (let i = 0; i < 2; i++) {
                        app.resumeText[Math.floor(Math.random() * app.resumeText.length)].t = Math.floor(Math.random() * 4);
                    }

                    setTimeout(function () {
                        app.resumeText[randomInt] = oldLetter;
                        for (let i = 0; i < app.resumeText.length; i++) {
                            app.resumeText[i].t = 0;
                        };
                    }, 1000);
                },
                handleOpenExp: function (numb) {
                    if (this.experience === numb) {
                        this.experience = -1;
                    }
                    else {
                        this.experience = numb;
                    }
                },
                isShowedExp: function (numb) {
                    return this.experience === numb;
                },
                toggleExpExpand: function (id) {
                    let app = this;
                    let fEl = document.getElementById('first-exp');
                    let sEl = document.getElementById('second-exp');
                    let tEl = document.getElementById('third-exp');
                    let maxHeight = document.scrollingElement.scrollHeight;
                    if (app.experience === id) {
                        if (id === 0) {
                            fEl.style.height = '0px';
                        } else if (id === 1) {
                            sEl.style.height = '0px';
                        } else {
                            tEl.style.height = '0px';
                        }

                        app.experience = -1;
                        document.scrollingElement.scrollTo({ top: maxHeight, behavior: "smooth" });
                        return;
                    }

                    app.experience = id;
                    fEl.style.height = '0px';
                    sEl.style.height = '0px';
                    tEl.style.height = '0px';
                    let element = id === 0 ? fEl : id === 1 ? sEl : tEl;
                    if (!element.style.height || element.style.height == '0px') {
                        element.style.height = 'calc(' + Array.prototype.reduce.call(element.childNodes, function (p, c) { return p + (c.offsetHeight || 0); }, 0) + 'px + 2vh)';
                    } else {
                        element.style.height = '0px';
                    }
                    setTimeout(() => document.scrollingElement.scrollTo({ top: maxHeight, behavior: "smooth" }), 200);
                },
                handleScrollForExpHead: function () {
                    let headEl = document.getElementById('expirience-head');
                    let vh = window.innerHeight / 100;
                    let scrollTop = document.scrollingElement.scrollTop / vh;
                    let headStyle = getComputedStyle(headEl);
                    let marginLeft = headStyle.marginLeft;
                    var vw = window.innerWidth / 100; 
                    if (scrollTop > 150) {
                        if (marginLeft.slice(0, -2) / vw < -40) {
                            headEl.style.marginLeft = 2 + "vw";
                        }
                    } else {
                        if (marginLeft.slice(0, -2) / vw > -40) {
                            headEl.style.marginLeft = -(vw * 50) + "px";
                        }
                    }

                },
                windowSizeChanged: function () {
                    this.validPageSize = !(window.innerHeight > window.innerWidth || window.innerWidth < 1142 || window.innerHeight < 700);
                }
            }
        })
    });