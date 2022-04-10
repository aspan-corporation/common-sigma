import { extname } from "path";
import { info } from "console";
import { documentClient } from "./awsClients";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

export const isKeyExtensionAllowed = (ext: string): boolean =>
  process.env.ALLOWED_EXTENSIONS.split("|").includes(ext);

export const getExtension = (key: string): string =>
  extname(key).toLowerCase().slice(1);

// prettier-ignore
export const dynamoTableRipper = async <T,>({
  tableName,
  processorFn,
}: {
  tableName: string;
  processorFn: (items: DocumentClient.ItemList) => Array<T>;
}): Promise<Array<T>> => {
  let result: Array<T> = [];
  let isFetching = true;
  let lastEvaluatedKey: DocumentClient.Key;

  do {
    const { LastEvaluatedKey, Items, Count } = await documentClient
      .scan({
        TableName: tableName,
        ...(lastEvaluatedKey ? { ExclusiveStartKey: lastEvaluatedKey } : {}),
      })
      .promise();

    if (Count) result = result.concat(processorFn(Items));

    info(
      `fetched: Count - ${Count}, LastEvaluatedKey - ${JSON.stringify(
        LastEvaluatedKey,
        null,
        2
      )}`
    );

    lastEvaluatedKey = LastEvaluatedKey;
    isFetching = Boolean(LastEvaluatedKey);
  } while (isFetching);

  return result;
};
