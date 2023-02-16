import { Server, Model, Factory } from "miragejs";
import { faker } from '@faker-js/faker';

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      user: Model,
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.internet.userName();
        },
        avatarUrl(i) {
          let c = i % 2 ? "men" : "women";
          return `https://randomuser.me/api/portraits/${c}/${i}.jpg`;
        },
        comment() {
          return '';
        },
        title() {
          return faker.internet.userName();
        },
      }),
    },

    seeds(server) {
      server.createList("user", 100);
    },

    routes() {
      this.urlPrefix = 'https://my.api.com';
      this.get("/api/users", (schema, request) => {
        return schema.users.all();
      });
      this.post("/api/users", ({ users }, request) => {
        let attrs = JSON.parse(request.requestBody)
        let _id = parseInt(attrs.id)
        users.find(_id).update(attrs);
        return users.all();
      })

    },
  });

  return server;
}

