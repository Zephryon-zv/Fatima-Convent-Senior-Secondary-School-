const sr = ScrollReveal({
    // origin: 'top',
    distance: '70px',
    duration: 2000,
    delay: 600
})



// sr.reveal(`#menuDropdown`, {delay: 3000});
sr.reveal(`.mission_vision`,{ origin: 'left', reset: true });

sr.reveal(`.principal_img`, { delay: 600, origin: 'left', reset: true  });
sr.reveal(`.principal_msg, .msg_1p`, { delay: 700, origin: 'right', reset: true  });
sr.reveal(`.principal_title`, { delay: 500, origin: 'top' , reset: true });
sr.reveal(`.event-titls`, { delay: 500, origin: 'top' , reset: true });
sr.reveal(`.upcoming-event-carousel, .btn_event`, { delay: 600, origin: 'bottom' , reset: true });

