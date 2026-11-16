// Supabase (MobyDicks project). The publishable key is meant to be public:
// it can only call the bday_* RSVP functions, never read the table directly.
window.RSVP_API = {
  url: "https://eggjcihdtaxjkcwhiefg.supabase.co",
  key: "sb_publishable_1n6cq2b4PGCeYl5xCqwC8Q_XLcDvwl1",
  rpc: function (fn, args) {
    return fetch(this.url + "/rest/v1/rpc/" + fn, {
      method: "POST",
      headers: { "Content-Type": "application/json", "apikey": this.key, "Authorization": "Bearer " + this.key },
      body: JSON.stringify(args || {})
    }).then(function (res) {
      return res.text().then(function (t) {
        var data = t ? JSON.parse(t) : null;
        if (!res.ok) { var e = new Error((data && data.message) || ("HTTP " + res.status)); e.status = res.status; throw e; }
        return data;
      });
    });
  }
};
