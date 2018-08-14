/**
 * @author youmoo
 * @since 16/4/18
 */
'use strict';

var isHtml = !location.href.endsWith('.md');

document.addEventListener('DOMContentLoaded', function (e) {
    console.info('htmlify ...');

    [].forEach.call(document.querySelectorAll('a[href]'), function (v) {
        var href = v.getAttribute('href');
        if (href.indexOf('#') === 0) {
            v.target = '_self';
        }
        if (isHtml && v.href.endsWith('.md')) {
            v.href = v.href.replace(/\.md$/, '.html');
        }
    });

    var article = document.querySelector('.markdown-body');
    var a = document.createElement('a');
    a.href = '/';
    a.textContent = '回首页';
    Object.assign(a.style, {padding: '5px 15px', float: 'right'});
    article.insertBefore(a, article.firstElementChild);
});

