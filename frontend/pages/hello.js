import React from 'react'
import Vim, { FileUpload } from 'react-vimjs'
import marked from 'marked'
import hljs from 'highlight.js'
import injectMdHighlight from 'helpers/highlights/midnight'

global.ReactVimJSExample = {}

marked.setOptions({
  highlight: function (code, lang) {
    if (lang === undefined) {
      return code
    }
    try {
      return hljs.highlight(lang, code).value
    } catch (e) {
      return code
    }
  }
})

export default class VimMarkdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = { buffer: '' }
  }

  componentDidMount () {
    window.localStorage['vimjs/root/.vimrc'] = this.getVimrc() // Temporary

    global.ReactVimJSExample.callback = buf => {
      this.setState({ buffer: buf })
    }
  }

  getVimrc () {
    return `autocmd BufNewFile,BufReadPost *.md setlocal ft=markdown
function s:executeCallBack()
  if &ft !=# 'markdown'
    return
  endif
  let buf = join(map(getline(1, '$'), 'escape(v:val, "\\\\!''#%")'), '\\n')
  execute "!ReactVimJSExample.callback('" . buf . "')"
endfunction
autocmd TextChanged,BufEnter * silent! call <SID>executeCallBack()

" Write your favorite config here.`
  }

  onFileUpload (parent, name) {
    window.alert(`Wrote to '${parent}/${name}'\n\nOpen with ':edit ${name}'`)
  }

  render () {
    const defaultText =
`react-vimjs Markdown Example
============================

This is an example for [react-vimjs](https://rhysd.github.io/react-vimjs).

**Edit** as you *like*!

\`\`\`javascript
console.log("Hello, world")
\`\`\`
`
    const files = [
      { parent: '/usr/local/share/vim/syntax', name: 'markdown.vim', content: injectMdHighlight() },
      { parent: '/root', name: 'test.md', content: defaultText }
    ]

    const props = {
      memPath: 'node_modules/react-vimjs/dist/vim.js.mem',
      vimrc: this.getVimrc(),
      args: ['test.md'],
      files: files
    }

    return (
      <div>
        <div className='vim'>
          <Vim {...props} ref='vim'>
            <h1 className='loading'><i className='fa fa-spinner fa-pulse' /> Now Loading...</h1>
          </Vim>
        </div>
        <div className='preview '>
          <FileUpload onUpload={() => this.onFileUpload}>
            <button className='local-edit-button' type='button'>
              <i className='fa fa-pencil-square-o' />
              Edit Local File
            </button>
          </FileUpload>
          <div className='markdown-body'>
            <span dangerouslySetInnerHTML={{ __html: marked(this.state.buffer) }} />
          </div>
        </div>
      </div>
    )
  }
}
