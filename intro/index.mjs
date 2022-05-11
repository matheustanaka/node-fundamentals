import { readFile, writeFile } from 'fs/promises'

// utf-8 transform the url in string, if you log template without utf, you'll see a byte code,
//but we want to see the html content, so pass utf as an argument to transform  bytes to string
let template = await readFile(new URL('./template.html', import.meta.url), 'utf-8')

// define the content that we'll interpolate in html
const data = {
  title: 'My new file',
  paragraph: 'I wrote this file to disk using node',
  content: "keep strudying math :)"
}

// looping through data objects and replace with those respective values 
for (const [key, val] of Object.entries(data)) {
  template = template.replace(`{${key}}`, val)
}

console.log(template)
// write a new file with the content that was replaced 
await writeFile(new URL('./index.html', import.meta.url), template)

