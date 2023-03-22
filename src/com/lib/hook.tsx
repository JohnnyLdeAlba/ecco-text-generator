export class t_hook {

  progma;
  serial;
  state;
  status;

  autoCommit;
  refresh;

  loading;
  loadPending;
  isLoading;

  constructor() {

    this.progma;
    this.serial = 0;
    this.state = "ready";
    this.status = new Map();

    this.loading = false;
    this.loadPending = [];
    this.isLoading = null;

    this.autoCommit = true;
    this.refresh = () => {}; 
  }

  enableLoading() {

    this.loading = true;
    this.loadPending.push(true);

    if (this.isLoading)
      this.isLoading(true);     
  }

  disableLoading() {

    this.loadPending.pop();
    this.loading = this.loadPending.length > 0;

    if (this.isLoading)
      this.isLoading(this.loading);     
  }

  send() {}

  disableAutoCommit() {
    this.autoCommit = false;
  }
  
  pushUpdate() {
    this.state = "updatePending";
  }

  sendRequest() {
    this.pushUpdate();
    this.status.set("sendRequest", true);
  }

  commit() {

    if (!this.autoCommit)
      return;

    if (this.status.get("sendRequest"))
      this.send();

    this.status.set("sendRequest", false);
    this.refresh();
  }

  update() {

    if (this.state != "updatePending")
      return;

    this.autoCommit = true;
    this.state = "ready";
    this.commit();
  }
}
