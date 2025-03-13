document.addEventListener('DOMContentLoaded', () => {
    const scrollableContent = document.querySelector('.scroll-content');
    const scrollbarThumb = document.querySelector('.custom-scrollbar-body .scrollbar-thumb');
    const scrollableWrapper = document.querySelector('.scroll-container');

    const MIN_THUMB_HEIGHT = 30;
    let isDragging = false;
    let isMobile = window.innerWidth <= 1024;
    let scrollTimeout;

    function updateScrollbar() {
        if (!scrollableContent || !scrollbarThumb || !scrollableWrapper) return;

        const contentHeight = scrollableContent.scrollHeight;
        const wrapperHeight = scrollableWrapper.clientHeight;

        if (contentHeight <= 0 || wrapperHeight <= 0) return;

        if (contentHeight <= wrapperHeight) {
            scrollbarThumb.style.display = 'none';
            return;
        } else {
            scrollbarThumb.style.display = 'block';
        }

        let thumbHeight = (wrapperHeight / contentHeight) * wrapperHeight;
        thumbHeight = Math.max(thumbHeight, MIN_THUMB_HEIGHT);
        scrollbarThumb.style.height = `${thumbHeight}px`;

        const scrollTop = scrollableContent.scrollTop;
        const maxScrollTop = contentHeight - wrapperHeight;
        const thumbPosition = (scrollTop / maxScrollTop) * (wrapperHeight - thumbHeight);

        scrollbarThumb.style.top = `${thumbPosition}px`;

        if (isMobile) {
            scrollbarThumb.classList.add('visible');
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                scrollbarThumb.classList.remove('visible');
            }, 400); // Hide scrollbar after 1 second of inactivity
        }
    }

    scrollableContent.addEventListener('scroll', updateScrollbar);
    window.addEventListener('resize', () => {
        isMobile = window.innerWidth <= 1024;
        updateScrollbar();
    });

    updateScrollbar();

    scrollbarThumb.addEventListener('mousedown', (e) => {
        if (isMobile) return; // Prevent drag on mobile

        isDragging = true;
        document.body.style.userSelect = 'none';
        document.body.style.pointerEvents = 'none';
        scrollbarThumb.style.pointerEvents = 'none';

        const initialY = e.clientY;
        const initialThumbPosition = parseFloat(scrollbarThumb.style.top || 0);

        function drag(e) {
            if (!isDragging) return;

            const deltaY = e.clientY - initialY;
            const newThumbPosition = initialThumbPosition + deltaY;
            const wrapperHeight = scrollableWrapper.clientHeight;
            const thumbHeight = parseFloat(scrollbarThumb.style.height || 0);
            const maxThumbPosition = wrapperHeight - thumbHeight;

            const clampedPosition = Math.min(Math.max(newThumbPosition, 0), maxThumbPosition);
            scrollbarThumb.style.top = `${clampedPosition}px`;

            const scrollTop = (clampedPosition / maxThumbPosition) * (scrollableContent.scrollHeight - scrollableContent.clientHeight);
            scrollableContent.scrollTop = scrollTop;
        }

        function stopDrag() {
            isDragging = false;
            document.body.style.userSelect = '';
            scrollbarThumb.style.pointerEvents = '';
            document.body.style.pointerEvents = '';
            document.removeEventListener('mousemove', drag);
            document.removeEventListener('mouseup', stopDrag);
        }

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
    });

    // Touch scrolling for mobile
    let touchStartY = 0;
    let scrollStartY = 0;

    scrollableContent.addEventListener('touchstart', (e) => {
        if (!isMobile) return;

        // Check if the touch event is inside an active dropdown
        const activeDropdown = document.querySelector('.dropdown-wrapper.active');
        if (activeDropdown && activeDropdown.contains(e.target)) {
            const dropdownMenu = activeDropdown.querySelector('.dropdown-menu');
            // Allow scrolling if the dropdown menu is scrollable
            if (dropdownMenu.scrollHeight > dropdownMenu.clientHeight) {
                return; // Allow default behavior for scrollable dropdowns
            }
        }

        touchStartY = e.touches[0].clientY;
        scrollStartY = scrollableContent.scrollTop;
    });

    scrollableContent.addEventListener('touchmove', (e) => {
        if (!isMobile) return;

        // Check if the touch event is inside an active dropdown
        const activeDropdown = document.querySelector('.dropdown-wrapper.active');
        if (activeDropdown && activeDropdown.contains(e.target)) {
            const dropdownMenu = activeDropdown.querySelector('.dropdown-menu');
            // Allow scrolling if the dropdown menu is scrollable
            if (dropdownMenu.scrollHeight > dropdownMenu.clientHeight) {
                return; // Allow default behavior for scrollable dropdowns
            }
        }

        const touchY = e.touches[0].clientY;
        const deltaY = touchY - touchStartY;
        scrollableContent.scrollTop = scrollStartY - deltaY;
    });

    window.updateScrollbar = updateScrollbar;
});