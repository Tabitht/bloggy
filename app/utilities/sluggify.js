function sluggify(text) {
    if (!text) {
        return null
    };
  
    return text
      .toLowerCase() // Convert to lowercase
      .replace(/[^\w\s-]/g, '') // Remove non-word, non-space, and non-hyphen characters
      .replace(/\s+/g, '-') // Replace whitespace with hyphens
      .replace(/-+$/, '') // Remove trailing hyphens
      .replace(/-+/g, '-'); // Replace multiple consecutive hyphens with a single hyphen
}

module.exports = sluggify;