/**
 * Google Ads Tracking Utilities
 * Captures and stores ad tracking parameters from URL
 */

// All tracking parameters we want to capture
const TRACKING_PARAMS = [
  'gclid',              // Google Click ID
  'utm_source',         // Traffic source
  'utm_medium',         // Traffic medium
  'utm_campaign',       // Campaign name
  'campaign_name',      // Campaign name (alternate)
  'adgroup_name',       // Ad group name
  'utm_term',           // Keyword term
  'search_term',        // Search term
  'utm_content',        // Ad content
  'fbclid',             // Facebook Click ID (bonus)
  'msclkid',            // Microsoft Click ID (bonus)
];

/**
 * Extract tracking parameters from URL
 * @returns {Object} Tracking data
 */
export function getTrackingParams() {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const trackingData = {};

  TRACKING_PARAMS.forEach(param => {
    const value = params.get(param);
    if (value) {
      trackingData[param] = value;
    }
  });

  return trackingData;
}

/**
 * Save tracking params to localStorage (persist across pages)
 * @param {Object} trackingData
 */
export function saveTrackingParams(trackingData) {
  if (typeof window === 'undefined') return;

  if (Object.keys(trackingData).length > 0) {
    localStorage.setItem('ad_tracking', JSON.stringify(trackingData));
    localStorage.setItem('ad_tracking_timestamp', new Date().toISOString());
  }
}

/**
 * Get stored tracking params from localStorage
 * @returns {Object} Stored tracking data
 */
export function getStoredTrackingParams() {
  if (typeof window === 'undefined') return {};

  try {
    const stored = localStorage.getItem('ad_tracking');
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error reading tracking params:', error);
    return {};
  }
}

/**
 * Get all tracking params (URL + stored)
 * URL params take precedence over stored
 * @returns {Object} Combined tracking data
 */
export function getAllTrackingParams() {
  const urlParams = getTrackingParams();
  const storedParams = getStoredTrackingParams();

  return {
    ...storedParams,
    ...urlParams, // URL params override stored
  };
}

/**
 * Initialize tracking - call on page load
 * Automatically extracts and saves URL params
 */
export function initializeTracking() {
  if (typeof window === 'undefined') return;

  const trackingData = getTrackingParams();
  if (Object.keys(trackingData).length > 0) {
    saveTrackingParams(trackingData);
    console.log('📊 Ad tracking captured:', trackingData);
  }
}
