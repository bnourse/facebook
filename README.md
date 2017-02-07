# Facebook

This is a long assignment that deals with reading and manipulating the DOM using JavaScript.

## Spec

The overall goal is to implement features that listen for user actions that trigger showing/hiding/changing information on the page without performing a request/response refresh.

### Clicking 'Like' should...

- change the text of that link from 'Like' to 'Unlike'
- update the number of likes that the post/comment has
- alter the behavior of the link so it behaves as an Unlike link next time it's clicked

### Clicking 'Comment' (in the `post__actions` area) should...

- Move the cursor into the post's main comment form

### Clicking 'Reply' or 'XX replies' should...

- show the replies area for that comment
- toggle the behavior of the link so that if it's clicked again, it hides the replies area

### Submitting a comment form should...

- raise an `alert()` error if nothing has been typed into the textarea
- update the number of comments/replies
    - This includes changing the text of what used to be a 'Reply' link to now read, '1 replies' (or '1 reply', if you're ambitious).
- add the comment to the correct location in the comments area

### Clicking on someone's name should...

- show the modal window with their name as the title and their number of friends as the body

### Clicking 'Share' should...

- show the modal window with 'Share _____'s post' (fill in the blank with the post owner's name) as the title and the post's content as the modal's body

### When the modal is open...

- clicking the 'X' should close the modal
- clicking anywhere in the dimmed-out background area should close the modal

## Notes

There is starter HTML and CSS. You will need to modify the HTML to achieve the above spec, but changing the CSS is probably not necessary. If CSS changes are needed, they will probably be very minor.

HTML changes will probably be adding tags, classes, or [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) to the existing HTML. Avoid significant structural changes to the HTML.

You cannot add `id` attributes to any of the HTML elements.