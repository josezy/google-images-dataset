// JS helper code to gather urls into text file

const text2save = Array.from(document.getElementsByTagName('img'))
    .filter(img => (img.src || img.dataset.src).startsWith('http'))
    .map(img => img.src || img.dataset.src)
    .join('\n')

const hiddenElement = document.createElement('a')
hiddenElement.href = 'data:attachment/text,' + encodeURI(text2save)
hiddenElement.target = '_blank'
hiddenElement.download = 'urls.txt'
hiddenElement.click()
