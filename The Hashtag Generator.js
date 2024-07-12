function generateHashtag(str) {
  
    if (!str.trim()) {
        return false;
    }
    
    let words = str.trim().split(/\s+/);
   
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

    let hashtag = '#' + capitalizedWords.join('');

    if (hashtag.length > 140) {
        return false;
    }

    return hashtag;
}
