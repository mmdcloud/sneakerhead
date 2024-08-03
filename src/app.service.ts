import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ElasticsearchService } from '@nestjs/elasticsearch';

type dataResponse = {
  UnitPrice: number;
  Description: string;
  Quantity: number;
  Country: string;
  InvoiceNo: string;
  InvoiceDate: Date;
  CustomerID: number;
  StockCode: string;
};

@Injectable()
export class AppService {
  constructor(
    private readonly esService: ElasticsearchService,
    private readonly configService: ConfigService,
  ) { }

  async search(search: { key: string }) {
    let results = new Set();
    const response = await this.esService.search({
      index: this.configService.get('ELASTICSEARCH_INDEX'),
      body: {
        size: 50,
        query: {
          match_phrase: search
        },
      },
    });
    const hits = response.hits.hits;
    hits.map((item) => {
      results.add(item._source as dataResponse);
    });

    return { results: Array.from(results), total: response.hits.total };
  }
}
