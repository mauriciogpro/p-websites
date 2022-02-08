const education = document.querySelector('#education')
const experience = document.querySelector('#experience')
const educationContent = document.querySelector('#education-content')
const experienceContent = document.querySelector('#experience-content')
const l_pagesContent = document.querySelector('#l_pages-content')
const l_pages = document.querySelector('#l_pages')
const js_projectsContent = document.querySelector('#js_projects-content')
const js_projects = document.querySelector('#js_projects')
const dot_NetContent = document.querySelector('#dot_Net-content')
const dot_Net = document.querySelector('#dot_Net')
const storage = document.querySelector('#storage')
const storageContent = document.querySelector('#storage-content')
const get_Job = document.querySelector('#get_Job')
const get_JobContent = document.querySelector('#get_Job-content')
const learning = document.querySelector('#learning')
const learningContent = document.querySelector('#learning-content')
const host_ssl_apis = document.querySelector('#host_ssl_apis')
const host_ssl_apisContent = document.querySelector('#host_ssl_apis-content')
const typingContent = document.querySelector('#typing-content')
const typing = document.querySelector('#typing')
const browserContent = document.querySelector('#browser-content')
const browser = document.querySelector('#browser')
const desktopContent = document.querySelector('#desktop-content')
const desktop = document.querySelector('#desktop')
const androidContent = document.querySelector('#android-content')
const android = document.querySelector('#android')
const vscodeContent = document.querySelector('#vscode-content')
const vscode = document.querySelector('#vscode')
const imagesContent = document.querySelector('#images-content')
const images = document.querySelector('#images')
const videosContent = document.querySelector('#videos-content')
const videos = document.querySelector('#videos')
const soundsContent = document.querySelector('#sounds-content')
const sounds = document.querySelector('#sounds')
const sheetsContent = document.querySelector('#sheets-content')
const sheets = document.querySelector('#sheets')
const fontsContent = document.querySelector('#fonts-content')
const fonts = document.querySelector('#fonts')
const mockupsContent = document.querySelector('#mockups-content')
const mockups = document.querySelector('#mockups')
const iconsContent = document.querySelector('#icons-content')
const icons = document.querySelector('#icons')
const skillsContent = document.querySelector('#skills-content')
const skills = document.querySelector('#skills')

education.addEventListener('click', () => {
  const educationBox = new WinBox({
    title: 'My Education',
    // modal: true,
    width: '1000px',
    height: '500px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 50,
    mount: educationContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

experience.addEventListener('click', () => {
  const experienceBox = new WinBox({
    title: 'My Experience',
    width: '1000px',
    height: '500px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 50,
    mount: experienceContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

l_pages.addEventListener('click', () => {
  const l_pagesBox = new WinBox({
    title: 'Landing Pages',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: l_pagesContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

js_projects.addEventListener('click', () => {
  const infoBox = new WinBox({
    title: 'Javascript Exercises',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: js_projectsContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})
dot_Net.addEventListener('click', () => {
  const dot_NetBox = new WinBox({
    title: '.Net',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: dot_NetContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

storage.addEventListener('click', () => {
  const storageBox = new WinBox({
    title: 'storage',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: storageContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

get_Job.addEventListener('click', () => {
  const get_JobBox = new WinBox({
    title: 'get_Job',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: get_JobContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

learning.addEventListener('click', () => {
  const learningBox = new WinBox({
    title: 'learning',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: learningContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

host_ssl_apis.addEventListener('click', () => {
  const host_ssl_apisBox = new WinBox({
    title: 'host_ssl_apis',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: host_ssl_apisContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

typing.addEventListener('click', () => {
  const typingBox = new WinBox({
    title: 'typing',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: typingContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

browser.addEventListener('click', () => {
  const browserBox = new WinBox({
    title: 'browser',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: browserContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

desktop.addEventListener('click', () => {
  const desktopBox = new WinBox({
    title: 'desktop',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: desktopContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

android.addEventListener('click', () => {
  const androidBox = new WinBox({
    title: 'android',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: androidContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

vscode.addEventListener('click', () => {
  const vscodeBox = new WinBox({
    title: 'vscode',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: vscodeContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

images.addEventListener('click', () => {
  const imagesBox = new WinBox({
    title: 'images',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: imagesContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

videos.addEventListener('click', () => {
  const videosBox = new WinBox({
    title: 'videos',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: videosContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

sounds.addEventListener('click', () => {
  const soundsBox = new WinBox({
    title: 'sounds',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: soundsContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

sheets.addEventListener('click', () => {
  const sheetsBox = new WinBox({
    title: 'sheets',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: sheetsContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

fonts.addEventListener('click', () => {
  const fontsBox = new WinBox({
    title: 'fonts',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: fontsContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

mockups.addEventListener('click', () => {
  const mockupsBox = new WinBox({
    title: 'mockups',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: mockupsContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

icons.addEventListener('click', () => {
  const iconsBox = new WinBox({
    title: 'icons',
    width: '500px',
    height: '400px',
    top: 40,
    right: 50,
    bottom: 50,
    left: 250,
    mount: iconsContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

skills.addEventListener('click', () => {
  const skillsBox = new WinBox({
    title: 'My skills',
    width: '600px',
    height: '700px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    mount: skillsContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})
