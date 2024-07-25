import { GraphQLResolveInfo } from 'graphql';

export function getRelations(info: GraphQLResolveInfo) {
  const initialSelections = info.fieldNodes[0].selectionSet.selections;
  // @ts-ignore
  const names = getSelectionNames(initialSelections);
  return names;
}

function getSelectionNames(allSelections: any[]): any {
  const selectionNames = {};

  for (const item of allSelections) {
    if (item.name && item.name.value && item.selectionSet) {
      selectionNames[item.name.value] = getSelectionNames(
        item.selectionSet.selections,
      );
    }
  }

  if (isObjectEmpty(selectionNames)) {
    return true;
  }

  return selectionNames;
}

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
