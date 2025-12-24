yes
# Task: Implement Automatic Form Pop-up After 6 Seconds

## Information Gathered
- Current app uses React/Next.js with useState for modal management
- EnquiryModal component exists with "enquiry" and "visit" modes
- SuccessModal already demonstrates timer functionality with setTimeout
- Main page component is in app/page.js
- Two modal states: showEnquiry and showBookVisit

## Plan
1. **Add useEffect import** to app/page.js for timer functionality
2. **Add new state** `hasAutoPopupShown` to track if popup has been displayed
3. **Implement useEffect hook** with 6-second setTimeout to trigger modal
4. **Choose modal type** - Use "visit" mode (book visit modal) for better user experience
5. **Add session storage** to prevent popup on every page refresh

## Files to be Edited
- `app/page.js` - Main page component

## Implementation Details
- Import useEffect from React
- Add state: `const [hasAutoPopupShown, setHasAutoPopupShown] = useState(false);`
- Add useEffect with cleanup to prevent memory leaks
- Check sessionStorage to avoid repeated popups
- Show "visit" modal after 6 seconds

## Followup Steps
1. Test the automatic popup functionality
2. Verify modal appears correctly after 6 seconds
3. Ensure cleanup prevents memory leaks
4. Check session storage prevents repeated popups

## ✅ COMPLETED IMPLEMENTATION

### Changes Made to `app/page.js`:
1. **Added useEffect import**: `import { useState, useEffect } from "react";`
2. **Added state tracking**: `const [hasAutoPopupShown, setHasAutoPopupShown] = useState(false);`
3. **Implemented automatic popup logic**:
   - 6-second timer using `setTimeout`
   - Shows "Book Visit" modal (`setShowBookVisit(true)`)
   - Uses sessionStorage to prevent repeated popups in same session
   - Proper cleanup with `clearTimeout` on component unmount
   - Checks for existing sessionStorage flag to avoid duplicate triggers

### Key Features:
- ✅ Automatic popup after 6 seconds of page load
- ✅ Uses existing "visit" modal for better user engagement
- ✅ Session-based prevention (popup only once per browser session)
- ✅ Memory leak prevention with proper cleanup
- ✅ Server-side rendering safe (checks `typeof window !== 'undefined'`)
- ✅ Follows existing code patterns and styling

### Testing Instructions:
1. Open the website in a new browser/tab
2. Wait 6 seconds and observe the "Book Visit" modal automatically appears
3. Close the modal and refresh the page - popup should not appear again in this session
4. Open in new browser/incognito mode - popup should appear again after 6 seconds
