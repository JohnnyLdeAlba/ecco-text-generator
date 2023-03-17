export class t_hook {

  serial;
  state;
  status;

  autoCommit;
  refresh;

  constructor() {

    this.serial = 0;
    this.state = "ready";
    this.status = new Map();

    this.autoCommit = true;
    this.refresh = () => {}; 
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
