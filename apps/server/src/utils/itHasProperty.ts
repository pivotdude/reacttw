import { GraphQLResolveInfo } from 'graphql';

export function itHasProperty(info: GraphQLResolveInfo, property: string) {
  if (!info) {
    return {};
  }
  const initialSelections = info.fieldNodes[0].selectionSet.selections;
  // @ts-ignore
  const selectionNames = initialSelections.map((s) => s.name.value);
  return selectionNames.includes(property);
}
