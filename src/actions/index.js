export const addItem = itemContent => {
  const getId = () => `_${Math.random()
    .toString(36)
    .substr(2, 9)};
    `;

  return {
    type: 'ADD_ITEM',
    payload: {
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
};

export const removeItem = id => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id,
    },
  };
};
