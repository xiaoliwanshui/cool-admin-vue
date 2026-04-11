export interface VIDEOPARAMS {
  srid?: number;
  ac?: string;
  h?: number;
  ids?: string;
  limit?: number;
  op?: string;
  page?: number;
  pagesize?: number;
  pg?: number;
  ps?: number;
  t?: number;
  wd?: string;
}

export class VideoParams {
  private _total = 0;
  private _srid = 0;
  private _ac = 'videolist';
  private _h: number | undefined = undefined;
  private _ids = '';
  private _limit = 0;
  private _op = 'all';
  private _page = 1;
  private _pagesize = 0;
  private _pg = 1;
  private _ps = 0;
  private _t = 0;
  private _wd = '';
  private _pagecount = 0;

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get srid(): number {
    return this._srid;
  }

  set srid(value: number) {
    this._srid = value;
  }

  get ac(): string {
    return this._ac;
  }

  set ac(value: string) {
    this._ac = value;
  }

  get h(): number | undefined {
    return this._h;
  }

  set h(value: number | undefined) {
    this._h = value;
  }

  get ids(): string {
    return this._ids;
  }

  set ids(value: string) {
    this._ids = value;
  }

  get limit(): number {
    return this._limit;
  }

  set limit(value: number) {
    this._limit = value;
  }

  get op(): string {
    return this._op;
  }

  set op(value: string) {
    this._op = value;
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }

  get pagesize(): number {
    return this._pagesize;
  }

  set pagesize(value: number) {
    this._pagesize = value;
  }

  get pg(): number {
    return this._pg;
  }

  set pg(value: number) {
    this._pg = value;
  }

  get ps(): number {
    return this._ps;
  }

  set ps(value: number) {
    this._ps = value;
  }

  get t(): number {
    return this._t;
  }

  set t(value: number) {
    this._t = value;
  }

  get wd(): string {
    return this._wd;
  }

  set wd(value: string) {
    this._wd = value;
  }

  get pagecount(): number {
    return this._pagecount;
  }

  set pagecount(value: number) {
    this._pagecount = value;
  }

  getObject(): VIDEOPARAMS {
    return {
      srid: this._srid,
      ac: this._ac,
      h: this._h,
      ids: this._ids,
      limit: this._limit,
      op: this._op,
      page: this._page,
      pagesize: this._pagesize,
      pg: this._pg,
      ps: this._ps,
      t: this._t,
      wd: this._wd,
    };
  }

  /**
   * 获取视频列表查询字符串
   * @returns 返回查询字符串
   */
  getQueryString(): string {
    const params = new URLSearchParams();
    
    // 只添加非空值
    if (this._srid !== 0) params.append('Srid', this._srid.toString());
    if (this._ac) params.append('ac', this._ac);
    if (this._h !== undefined) params.append('h', this._h.toString());
    if (this._ids) params.append('ids', this._ids);
    if (this._limit !== 0) params.append('limit', this._limit.toString());
    if (this._op) params.append('op', this._op);
    if (this._page !== 0) params.append('page', this._page.toString());
    if (this._pagesize !== 0) params.append('pagesize', this._pagesize.toString());
    if (this._pg !== 0) params.append('pg', this._pg.toString());
    if (this._ps !== 0) params.append('ps', this._ps.toString());
    if (this._t !== 0) params.append('t', this._t.toString());
    if (this._wd) params.append('wd', this._wd);
    
    return params.toString();
  }
}
