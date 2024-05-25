import QueryString from "qs";
import HttpClient from "../http.js";
import { CreateRefundPayload } from "./types.js";
import RefundDto from "./dto.js";

export default class RefundService {
  private basePath = "/refunds";

  constructor(private readonly client: HttpClient) {}

  async create(params: CreateRefundPayload) {
    const response = await this.client.send(
      "post",
      this.basePath,
      QueryString.stringify(params, { arrayFormat: "brackets" })
    );

    return new RefundDto(response.body);
  }
}
