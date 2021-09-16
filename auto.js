{
  /* eslint-disable-next-line no-undef */
  const emojiconImpl = typeof emojicon === 'function' ? emojicon : require('.')
  const favicon = document.querySelector('link[rel=icon][data-emoji]')

  if (favicon) {
    emojiconImpl(favicon.dataset.emoji, favicon)
  }
}
