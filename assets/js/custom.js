(function($) {
  const RSS_URL = 'https://superchig.com/index.xml';

  (async function() {
    const response = await fetch(RSS_URL);
    const xml_text = await response.text();
    const rss_doc = new window.DOMParser().parseFromString(xml_text, "text/xml");
  
    const posts = rss_doc.querySelectorAll("item");
  
    for (const post of posts) {
      const link = post.querySelector("link").innerHTML;
      const title = post.querySelector("title").innerHTML;
      console.log(title);

      $("#blog-posts").append(`<li><a href="${link}">${title}</a></li>`)
    }
  })();
})(jQuery)