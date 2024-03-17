export const getLevelName = (level) => {
  if (level === 1) {
    return 'А0';
  } else if (level === 2) {
    return 'А1';
  } else if (level === 3) {
    return 'А2';
  } else if (level === 4) {
    return 'В1';
  } else if (level === 5) {
    return 'В2';
  } else {
    return 'C1';
  }
};

export const getLevelNameList = (level) => {
  if (level === 1) {
    return 'А0 - Beginner';
  } else if (level === 2) {
    return 'А1 - Elementary';
  } else if (level === 3) {
    return 'А2 - Pre-Intermediate';
  } else if (level === 4) {
    return 'В1 - Intermediate';
  } else if (level === 5) {
    return 'В2 - Upper-Intermediate';
  } else {
    return 'C1 - Advanced';
  }
};
