const path = require('path')
const fs = require('fs')

const githubRepo = 'https://github.com/ashishdotme/code.ashish.me/blob/master/'

let content = ''
let problems = []
let linkTitle

const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const fetchAllProblems = dir => {
  const files = fs.readdirSync(dir)
  files.forEach((file, index) => {
    const filePath = path.normalize(`${dir}/${file}`)
    const stat = fs.statSync(filePath)
    if (stat.isFile()) {
      if (file !== 'launch.json' && file !== '.DS_Store') {
        const problem = []
        const isNameProper = file.indexOf('-')
        if (isNameProper !== -1) {
          const splitArr = file.split(/-(.+)/)
          if (splitArr[0]) problem.push(splitArr[0])
          const title =
            splitArr[1] &&
            splitArr[1]
              .split('-')
              .join(' ')
              .replace(/\.[^/.]+$/, '')
          linkTitle = `[${capitalize(title)}](${githubRepo}${filePath})`
        } else {
          problem.push(index)
          const title = file.replace(/\.[^/.]+$/, '')
          linkTitle = `[${capitalize(title)}](${githubRepo}${filePath})`
        }
        problem.push(linkTitle)
        problems.push(problem)
      }
    } else {
      fetchAllProblems(filePath)
    }
  })
}

const srcDir = fs.readdirSync(__dirname, { withFileTypes: true })
const platforms = srcDir
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .filter(folder => folder[0] !== '.' && folder !== 'docs' && folder !== 'node_modules')
platforms.forEach(platform => {
  problems = []
  content = `# ${capitalize(platform)} Problems

  | # | Title |
  | :---: | :--- |
  `
  fetchAllProblems(platform)
  problems.sort((fileA, fileB) => fileA[0] - fileB[0])
  problems.forEach((item, index) => {
    content += ` ${index + 1} | ${item[1]} |`
    content += '\n'
  })
  fs.writeFile(`${__dirname}/docs/${platform}-README.md`, content, function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log(`Generated ${platform}-README.md`)
    }
  })
})
