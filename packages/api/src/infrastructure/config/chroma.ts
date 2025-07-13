import { ChromaClient, Collection } from "chromadb";

export class ChromaService {
  private static _instance: ChromaService;
  private client: ChromaClient;
  private collection: Collection;

  private constructor() {}

  static async getInstance(collectionName: string = "trackers") {
    if (!ChromaService._instance) {
      ChromaService._instance = new ChromaService();
      await ChromaService._instance.init(collectionName);
    }
    return ChromaService._instance;
  }

  private async init(collectionName: string) {
    this.client = new ChromaClient();
    this.collection = await this.client.getOrCreateCollection({ name: collectionName });
  }

  /**
   * Insert or update documents into Chroma
   * @param ids array of unique document IDs
   * @param documents array of strings to embed/store
   * @param metadatas optional array of metadata objects
   * @param embeddings optional array of embeddings
   */
  async upsert(
    ids: string[],
    documents: string[],
    metadatas?: Record<string, any>[],
    embeddings?: number[][]
  ) {
    await this.collection.upsert({
      ids,
      documents,
      metadatas,
      embeddings,
    });
  }

  /**
   * Query similar documents
   * @param queryTexts array of query strings
   * @param nResults number of results to return
   */
  async query(queryTexts: string[], nResults: number = 5) {
    return this.collection.query({
      queryTexts,
      nResults,
    });
  }
}
