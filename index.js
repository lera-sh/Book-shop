window.addEventListener('DOMContentLoaded', () => {
  fetch("./books.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });
})


function appendData(data) {
  const wrapper = document.querySelector('.wrapper')
  const start = document.createElement('div')
  const header = document.createElement('header')

  const logoSection = document.createElement('div')
  const logoLink = document.createElement('a')
  const logo = document.createElement('h1')

  const navbar = document.createElement('nav')
  const navItems = document.createElement('ul')
  const navItemBook = document.createElement('li')
  const navBookLink = document.createElement('a')
  const navIconBook = document.createElement('img')
  const navTextBook = document.createElement('p')
  const navItemContact = document.createElement('li')
  const navContactLink = document.createElement('a')
  const navIconContact = document.createElement('img')
  const navTextContact = document.createElement('p')

  const headerBagSection = document.createElement('div')
  const headerAmount = document.createElement('p')
  const headerBag = document.createElement('img')
  let itemCount = 0

  header.className = 'header-section'
  start.className = 'start-section'

  logoSection.className = 'logo-section'
  logo.className = 'logo'

  navItems.className = 'nav-items'
  navItemBook.className = 'nav-item'
  navBookLink.className = 'nav-link'
  navIconBook.className = 'nav-icon'
  navTextBook.className = 'nav-text'
  navItemContact.className = 'nav-item'
  navContactLink.className = 'nav-link'
  navIconContact.className = 'nav-icon'
  navTextContact.className = 'nav-text'

  headerBagSection.className = 'header-bag-section'
  headerAmount.className = 'header-amount'
  headerBag.className = 'header-bag'

  logoLink.href = '#no_scroll'
  logo.innerHTML = 'Books'
  navBookLink.href = '#catalog'
  navIconBook.src = './assets/icons/books.png'
  navTextBook.innerHTML = 'Books'
  navContactLink.href = '#contact'
  navIconContact.src = './assets/icons/mail.png'
  navTextContact.innerHTML = 'Contact us'
  headerAmount.innerHTML = `${itemCount}`
  headerBag.src = './assets/icons/bag.png'

  wrapper.appendChild(start)
  start.appendChild(header)
  header.appendChild(logoSection)
  logoSection.appendChild(logoLink)
  logoLink.appendChild(logo)

  header.appendChild(navbar)
  navbar.appendChild(navItems)
  navItems.appendChild(navItemBook)
  navItemBook.appendChild(navBookLink)
  navBookLink.appendChild(navIconBook)
  navBookLink.appendChild(navTextBook)
  navItems.appendChild(navItemContact)
  navItemContact.appendChild(navContactLink)
  navContactLink.appendChild(navIconContact)
  navContactLink.appendChild(navTextContact)

  header.appendChild(headerBagSection)
  headerBagSection.appendChild(headerAmount)
  headerBagSection.appendChild(headerBag)

  const introSection = document.createElement('div')
  const introContent = document.createElement('div')
  const introPhoto = document.createElement('div')
  const introTitle = document.createElement('h2')
  const introText = document.createElement('p')
  const introAuthor = document.createElement('p')
  const introImg = document.createElement('img')

  introSection.className = 'intro-section'
  introContent.className = 'intro-content'
  introPhoto.className = 'intro-photo'
  introTitle.className = 'intro-title'
  introText.className = 'intro-text'
  introAuthor.className = 'intro-author'
  introImg.className = 'intro-img'

  introTitle.innerHTML = 'Books shop'
  introText.innerHTML = 'Books were my pass to personal freedom'
  introAuthor.innerHTML = 'Oprah Winfrey'
  introImg.src = './assets/images/bg.jpg'

  start.appendChild(introSection)
  introSection.appendChild(introContent)
  introSection.appendChild(introPhoto)
  introContent.appendChild(introTitle)
  introContent.appendChild(introText)
  introContent.appendChild(introAuthor)
  introPhoto.appendChild(introImg)

  const main = document.createElement('main')
  const catalogSection = document.createElement('div')
  const catalogInfo = document.createElement('div')
  const catalogTitle = document.createElement('h2')
  const bag = document.createElement('div')
  const catalogBagContainer = document.createElement('div')
  const catalogBagDescr = document.createElement('p')
  const catalogBagImg = document.createElement('img')
  const catalogBagAmount = document.createElement('p')

  main.className = 'main'
  catalogSection.className = 'catalog-section'
  catalogSection.setAttribute('id', "catalog")
  catalogInfo.className = 'catalog-info'
  catalogTitle.className = 'catalog-title'
  bag.className = 'bag'
  catalogBagContainer.className = 'bag-container'
  catalogBagDescr.className = 'bag-text'
  catalogBagImg.className = 'bag-img'
  catalogBagAmount.className = 'bag-amount'

  catalogTitle.innerHTML = 'Books catalog'
  catalogBagDescr.innerHTML = 'My bag'
  catalogBagImg.src = './assets/icons/bag.png'
  catalogBagAmount.innerHTML = `${itemCount}`

  wrapper.appendChild(main)
  main.appendChild(catalogSection)
  catalogSection.appendChild(catalogInfo)
  catalogInfo.appendChild(catalogTitle)
  catalogInfo.appendChild(bag)
  bag.appendChild(catalogBagContainer)
  catalogBagContainer.appendChild(catalogBagDescr)
  catalogBagContainer.appendChild(catalogBagImg)
  catalogBagContainer.appendChild(catalogBagAmount)

  let specialPriceTag = 0
  const bagList = document.createElement('div')
  const bagContent = document.createElement('div')
  const crossBagContainer = document.createElement('div')
  const crossBag = document.createElement('img')
  const book = document.createElement('div')
  const bagTitlesContainer = document.createElement('div')
  const imageTitle = document.createElement('h3')
  const nameTitle = document.createElement('h3')
  const priceTitle = document.createElement('h3')
  const totalContainer = document.createElement('div')
  const totalPrice = document.createElement('h3')
  const confirmContainer = document.createElement('div')
  const confirmLink = document.createElement('a')
  const confirmButton = document.createElement('button')

  bagList.className = 'bag-info'
  bagContent.className = 'bag-content'
  crossBagContainer.className = 'cross-bag-container'
  crossBag.className = 'cross'
  book.className = 'book'
  bagTitlesContainer.className = 'bag-titles-container'
  imageTitle.className = 'bag-subtitle'
  nameTitle.className = 'bag-subtitle'
  priceTitle.className = 'bag-subtitle'
  totalContainer.className = 'total-container'
  totalPrice.className = 'bag-subtitle'
  confirmContainer.className = 'confirm-container'
  confirmButton.className = 'confirm-button'

  crossBag.src = './assets/icons/cross.png'
  imageTitle.innerHTML = 'Image'
  nameTitle.innerHTML = 'Name'
  priceTitle.innerHTML = 'Price'
  totalPrice.innerText = `Total: ${specialPriceTag}$`
  confirmButton.innerHTML = 'Confirm order'
  confirmLink.href = './order.html'

  bag.appendChild(bagList)
  bagList.appendChild(bagContent)
  bagContent.appendChild(crossBagContainer)
  crossBagContainer.appendChild(crossBag)
  bagContent.appendChild(book)
  book.appendChild(bagTitlesContainer)
  bagTitlesContainer.appendChild(imageTitle)
  book.appendChild(bagTitlesContainer)
  bagTitlesContainer.appendChild(nameTitle)
  book.appendChild(bagTitlesContainer)
  bagTitlesContainer.appendChild(priceTitle)
  bagContent.appendChild(totalContainer)
  totalContainer.appendChild(totalPrice)
  bagContent.appendChild(confirmContainer)
  confirmContainer.appendChild(confirmLink)
  confirmLink.appendChild(confirmButton)

  catalogBagContainer.addEventListener( 'click' , () => {
    bagList.classList.add('open-info')
  })

  crossBagContainer.addEventListener( 'click' , () => {
    bagList.classList.remove('open-info')
  })

  const catalogContent = document.createElement('div')

  let dragged = null
  let handleDrop = null
  const target = document.querySelector('.bag-container')
  target.addEventListener('dragover', event => {
    event.preventDefault()
  })

  target.addEventListener('drop', () => {
    handleDrop()
  })

  for (var i = 0; i < data.length; i++) {
    const catalogCard = document.createElement('div')
    const image = document.createElement("img")
    const info = document.createElement("div")
    const title = document.createElement("h4")
    const author = document.createElement("p")
    const price = document.createElement("p")

    const imageForBag = document.createElement("img")
    const titleForBag = document.createElement("h4")
    const authorForBag = document.createElement("p")
    const priceForBag = document.createElement("p")

    catalogContent.className = 'catalog-content'
    catalogCard.className = 'catalog-card'
    image.className = 'image'
    info.className = 'info'
    title.className = 'title'
    author.className = 'author'
    price.className = 'price'

    imageForBag.className = 'image-for-bag'
    titleForBag.className = 'title'
    authorForBag.className = 'author'
    priceForBag.className = 'price'

    image.src = data[i].imageLink
    title.innerHTML = data[i].title
    author.innerHTML = data[i].author
    price.innerHTML = data[i].price + "$"

    imageForBag.src = data[i].imageLink
    titleForBag.innerHTML = data[i].title
    authorForBag.innerHTML = data[i].author
    priceForBag.innerHTML = data[i].price + "$"

    catalogSection.appendChild(catalogContent)
    catalogContent.appendChild(catalogCard)
    catalogCard.appendChild(image)
    catalogCard.appendChild(info)
    info.appendChild(title)
    info.appendChild(author)
    info.appendChild(price)

    const buttonsContainer = document.createElement("div")
    const showButton = document.createElement("button")
    const addButton = document.createElement("button")

    buttonsContainer.className = 'buttons-container'
    showButton.className = 'catalog-button'
    addButton.className = 'catalog-button'

    showButton.innerHTML = 'Show more'
    addButton.innerHTML = 'Add to bag'

    catalogCard.appendChild(buttonsContainer)
    buttonsContainer.appendChild(showButton)
    buttonsContainer.appendChild(addButton)

    catalogCard.addEventListener( 'mouseover' , () => {
      buttonsContainer.classList.add('buttons-visible')
      author.classList.add('color')
      price.classList.add('color')
    })

    catalogCard.addEventListener( 'mouseout' , () => {
      buttonsContainer.classList.remove('buttons-visible')
      author.classList.remove('color')
      price.classList.remove('color')
    })

    const popupInfo = document.createElement('div')
    const bookInfo = document.createElement('div')
    const crossContainer = document.createElement('div')
    const cross = document.createElement('img')
    const bookText = document.createElement('p')

    popupInfo.className = 'popup-info'
    bookInfo.className = 'book-info'
    crossContainer.className = 'cross-container'
    cross.className = 'cross'
    bookText.className = 'book-text'

    cross.src = './assets/icons/cross.png'
    bookText.innerHTML = data[i].description

    catalogCard.appendChild(popupInfo)
    popupInfo.appendChild(bookInfo)
    bookInfo.appendChild(crossContainer)
    crossContainer.appendChild(cross)
    bookInfo.appendChild(bookText)

    showButton.addEventListener( 'click' , () => {
      popupInfo.classList.add('open-info')
    })

    crossContainer.addEventListener( 'click' , () => {
      popupInfo.classList.remove('open-info')
    })

    const bookRaw = document.createElement('div')
    const nameItem = document.createElement('div')
    const bookCrossContainer = document.createElement('div')
    const bookCross = document.createElement('img')
    const p = Number(data[i].price)

    bookRaw.className = 'book-raw'
    nameItem.className = 'name-item'
    bookCrossContainer.className = 'cross-container'
    bookCross.className = 'cross'

    bookCross.src = './assets/icons/cross.png'

    addButton.addEventListener( 'click' , () => {
      book.appendChild(bookRaw)
      bookRaw.appendChild(imageForBag)
      bookRaw.appendChild(nameItem)
      nameItem.appendChild(titleForBag)
      nameItem.appendChild(authorForBag)
      bookRaw.appendChild(priceForBag)
      bookRaw.appendChild(bookCrossContainer)
      bookCrossContainer.appendChild(bookCross)
      catalogBagAmount.innerHTML = `${++itemCount}`
      headerAmount.innerHTML = `${itemCount}`
      specialPriceTag += p
      totalPrice.innerText = `Total: ${specialPriceTag}$`
    })

    bookCrossContainer.addEventListener( 'click', () => {
      bookRaw.remove(imageForBag)
      bookRaw.remove(nameItem)
      nameItem.remove(titleForBag)
      nameItem.remove(authorForBag)
      bookRaw.remove(priceForBag)
      bookRaw.remove(bookCrossContainer)
      bookCrossContainer.remove(bookCross)
      catalogBagAmount.innerHTML = `${--itemCount}`
      headerAmount.innerHTML = `${itemCount}`
      specialPriceTag -= p
      totalPrice.innerText = `Total: ${specialPriceTag}$`
    })

    const catalogDrag = image.cloneNode(false)

    function imageOver(event) {
      console.log(event)
      event.preventDefault()
    }

    function imageDrop() {
      book.appendChild(bookRaw)
      bookRaw.appendChild(imageForBag)
      bookRaw.appendChild(nameItem)
      nameItem.appendChild(titleForBag)
      nameItem.appendChild(authorForBag)
      bookRaw.appendChild(priceForBag)
      bookRaw.appendChild(bookCrossContainer)
      bookCrossContainer.appendChild(bookCross)
      catalogBagAmount.innerHTML = `${++itemCount}`
      headerAmount.innerHTML = `${itemCount}`
      specialPriceTag += p
      totalPrice.innerText = `Total: ${specialPriceTag}$`
    }

    image.addEventListener('dragstart', event => {
      dragged = event.target
      handleDrop = imageDrop
    })
    image.addEventListener('dragend', event => {
      dragged = null
      handleDrop = null
    })
  }

  const footer = document.createElement('footer')
  const footerContainer = document.createElement('div')
  const logoFooterSection = document.createElement('div')
  const logoFooterLink = document.createElement('a')
  const logoFooter = document.createElement('h2')

  const socialContainer = document.createElement('ul')

  const socialIg = document.createElement('li')
  const linkIg = document.createElement('a')
  const socialIgImg = document.createElement('img')
  const socialIgText = document.createElement('p')

  const socialTwitter = document.createElement('li')
  const linkTwitter = document.createElement('a')
  const socialTwitterImg = document.createElement('img')
  const socialTwitterText = document.createElement('p')

  const socialFacebook = document.createElement('li')
  const linkFacebook = document.createElement('a')
  const socialFacebookImg = document.createElement('img')
  const socialFacebookText = document.createElement('p')

  footer.className = 'footer'
  footer.setAttribute('id', "contact")
  footerContainer.className = 'footer-container'
  logoFooterSection.className = 'logo-section'
  logoFooter.className = 'logo'

  socialContainer.className = 'social-container'

  socialIg.className = 'social-item'
  linkIg.className = 'social-link'
  socialIgImg.className = 'social-img'
  socialIgText.className = 'social-text'
  linkIg.href = 'https://www.instagram.com/accounts/login/'
  linkIg.setAttribute('target', '_blank')
  socialIgImg.src = './assets/icons/instagram.png'
  socialIgText.innerHTML = 'Instagram'

  socialTwitter.className = 'social-item'
  linkTwitter.className = 'social-link'
  socialTwitterImg.className = 'social-img'
  socialTwitterText.className = 'social-text'
  linkTwitter.href = 'https://twitter.com/i/flow/login'
  linkTwitter.setAttribute('target', '_blank')
  socialTwitterImg.src = './assets/icons/twitter.png'
  socialTwitterText.innerHTML = 'Twitter'

  socialFacebook.className = 'social-item'
  linkFacebook.className = 'social-link'
  socialFacebookImg.className = 'social-img'
  socialFacebookText.className = 'social-text'
  linkFacebook.href = 'https://www.facebook.com/'
  linkFacebook.setAttribute('target', '_blank')
  socialFacebookImg.src = './assets/icons/facebook.png'
  socialFacebookText.innerHTML = 'Facebook'

  logoFooter.innerHTML = 'Books'

  wrapper.appendChild(footer)
  footer.appendChild(footerContainer)
  footerContainer.appendChild(logoFooterSection)
  logoFooterSection.appendChild(logoFooterLink)
  logoFooterLink.appendChild(logoFooter)

  footerContainer.appendChild(socialContainer)
  socialContainer.appendChild(socialIg)
  socialIg.appendChild(linkIg)
  linkIg.appendChild(socialIgImg)
  linkIg.appendChild(socialIgText)
  socialContainer.appendChild(socialTwitter)
  socialTwitter.appendChild(linkTwitter)
  linkTwitter.appendChild(socialTwitterImg)
  linkTwitter.appendChild(socialTwitterText)
  socialContainer.appendChild(socialFacebook)
  socialFacebook.appendChild(linkFacebook)
  linkFacebook.appendChild(socialFacebookImg)
  linkFacebook.appendChild(socialFacebookText)

  const designContainer = document.createElement('div')
  const designImg = document.createElement('img')

  designContainer.className = 'design-container'
  designImg.className = 'design-img'
  designImg.src = './assets/icons/decoration.png'

  footer.appendChild(designContainer)
  designContainer.appendChild(designImg)
}
