
export const PRIMARY_STATISTICS = [
  'confirmed',
  'active',
  'recovered',
  'deceased',
];

export const getStatistic = (data, type, statistic, normalizer = 1) => {
  let count;
  if (statistic === 'active') {
    const confirmed = data?.[type]?.confirmed || 0;
    const deceased = data?.[type]?.deceased || 0;
    const recovered = data?.[type]?.recovered || 0;
    const migrated = data?.[type]?.migrated || 0;
    count = confirmed - deceased - recovered - migrated;
  } else {
    count = data?.[type]?.[statistic] || 0;
  }
  return count / normalizer;
};

export const capitalize = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};