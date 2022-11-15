const mockResults = {
    data: {
        articles: [
            {
                source: {
                    id: 'abc-news',
                    name: 'ABC News',
                },
                "author": "ABC News",
                "title": "Biden to nominate former Fed chair Janet Yellen as Treasury secretary - ABC News",
                "description": "President-elect Joe Biden is expected to nominate Janet",
                "url": "https://abcnews.go.com/Politics/biden-nominate-former-fed-chair-janet-yellen-treasury/story?id=74710000",
                "urlToImage": "https://s.abcnews.com/images/Politics/202012_janet_yellen_gty_jc_121320_hpMain_16x9_992.jpg",
                "publishedAt": "2020-12-13T17:00:00Z",
                "content": "President-elect Joe Biden is expected to nominate Janet Yellen as his Treasury secretary, according to a source familiar with the matter"
            }
        ]
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: jest.fn().mockResolvedValue(mockResults)
}