import { IParty } from "../store/slices/partySlice";

export const sortPartiesArray = (unSortedArray: any[]) => {
  const compare = (a: any, b: any) => {
    if (a.fullDate < b.fullDate) {
      return -1;
    }
    if (a.fullDate > b.fullDate) {
      return 1;
    }
    return 0;
  };
  const sortedArray = unSortedArray.sort(compare);
  return sortedArray;
};

export const getPreviousParties = (parties: any[]) => {
  const sortedParties = sortPartiesArray(parties);
  const now = new Date();

  return sortedParties.filter((e) => {
    const partyDate = new Date(`${e.date} ${e.time}`);
    const utc1 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    const utc2 = Date.UTC(
      partyDate.getFullYear(),
      partyDate.getMonth(),
      partyDate.getDate()
    );
    return utc2 <= utc1;
  });
};

export const getNearestParty = (parties: any[]) => {
  const sortedParties = sortPartiesArray(parties);
  const now = new Date();
  return (
    sortedParties.find((e) => {
      const partyDate = new Date(`${e.date} ${e.time}`);
      const utc1 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
      const utc2 = Date.UTC(
        partyDate.getFullYear(),
        partyDate.getMonth(),
        partyDate.getDate()
      );
      return utc2 > utc1;
    }) || null
  );
};

export const getDaysToEvent = (party: IParty) => {
  const partyDate = new Date(`${party.date} ${party.time}`);
  const now = new Date();

  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const utc2 = Date.UTC(
    partyDate.getFullYear(),
    partyDate.getMonth(),
    partyDate.getDate()
  );

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};
