# Sticky Nav
Change the nav to sticky at certain point.

## Skill Get
nav.offsetTop : the pixels from the viewport top to nav top.
nav.offsetHeight: the pixels of the nav height.
window.scrollY : the pixels that have been scrolled.

When the nav become fixed, it no longer take the space from the document. The context next to it will igorn and take up the space. 
If we want to keep the context stay where it used to be when nav is fixed, we need to add the offsetHeight to the body.
`body.style.paddingTop = nav.offsetHeight+'px';`
