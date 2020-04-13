import React from 'react';
import EmailItem from './EmailItem';

const emails = [
    {
        image: 'img/common/tilo-avatar.png',
        name: 'Tilo Mitra',
        subject: 'Hello from Toronto',
        content: 'Hey, I just wanted to check in with you from Toronto. I got here earlier today.',
        mailPath: '/tilto'
    },
    {
        image: 'img/common/ericf-avatar.png',
        name: 'Eric Ferraiuolo',
        subject: 'Re: Pull Requests',
        content: 'Hey, I had some feedback for pull request #51. We should center the menu so it looks better on mobile.',
        mailPath: '/eric'
    },
    {
        image: 'img/common/yui-avatar.png',
        name: 'YUI Library',
        subject: 'You have 5 bugs assigned to you',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla.',
        mailPath: '/yui'
    },
    {
        image: 'img/common/reid-avatar.png',
        name: 'Reid Burke',
        subject: 'Re: Design Language',
        content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
        mailPath: '/reid'
    },
    {
        image: 'img/common/andrew-avatar.png',
        name: 'Andrew Wooldridge',
        subject: 'YUI Blog Updates?',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
        mailPath: '/andrew'
    },
    {
        image: 'img/common/yfinance-avatar.png',
        name: 'Yahoo! Finance',
        subject: 'How to protect your finances from winter storms',
        content: 'Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris.',
        mailPath: '/finance'
    },
    {
        image: 'img/common/ynews-avatar.png',
        name: 'Yahoo! News',
        subject: 'Summary for April 3rd, 2012',
        content: 'We found 10 news articles that you may like.',
        mailPath: '/news'
    }
];

function EmailList() {
    return (
        <div id="list" class="pure-u-1">
            {emails.map(item =>
            <EmailItem
                key={item.index}
                image={item.image}
                name={item.name}
                subject={item.subject}
                content={item.content}
                mailPath={item.mailPath}
            />
            )}
        </div>
    )
}

export default EmailList;