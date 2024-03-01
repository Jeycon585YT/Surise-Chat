export const findCommonChatId = (currentChatIds, targetChatIds) => {
  const commonChatId = Array.from(currentChatIds.docs).find((doc) => {
    const exists = Array.from(targetChatIds.docs).some((_doc) => {
      return _doc.data().chatRomId === doc.data().chatRomId;
    });

    if (exists) {
      return true;
    }

    return false;
  });

  return commonChatId?.data()?.chatRomId;
};
