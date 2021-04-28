function cov_2212ywgczs() {
  var path = "/Users/bardelvitto/Documents/ecommerce-challenge3/src/services/searchItemsService.js";
  var hash = "ee1a7b47fa84369bd17f65bdc4a86785e6f31e1d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/bardelvitto/Documents/ecommerce-challenge3/src/services/searchItemsService.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 27
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 21
        },
        end: {
          line: 7,
          column: 82
        }
      },
      "2": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 25
        }
      },
      "3": {
        start: {
          line: 11,
          column: 28
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "4": {
        start: {
          line: 12,
          column: 21
        },
        end: {
          line: 12,
          column: 75
        }
      },
      "5": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 30
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 27
          },
          end: {
            line: 6,
            column: 28
          }
        },
        loc: {
          start: {
            line: 6,
            column: 48
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 28
          },
          end: {
            line: 11,
            column: 29
          }
        },
        loc: {
          start: {
            line: 11,
            column: 44
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 11
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ee1a7b47fa84369bd17f65bdc4a86785e6f31e1d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2212ywgczs = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2212ywgczs();
import { makeRequest } from '../lib/makeRequest';
cov_2212ywgczs().s[0]++;
export const searchItems = async itemsSearch => {
  cov_2212ywgczs().f[0]++;
  const response = (cov_2212ywgczs().s[1]++, await makeRequest(`/api/items?q=${itemsSearch}`, 'get', null));
  cov_2212ywgczs().s[2]++;
  return response.data;
};
cov_2212ywgczs().s[3]++;
export const searchItemId = async itemId => {
  cov_2212ywgczs().f[1]++;
  const response = (cov_2212ywgczs().s[4]++, await makeRequest(`/api/items/${itemId}`, 'get', null));
  cov_2212ywgczs().s[5]++;
  return response.data.item;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaEl0ZW1zU2VydmljZS5qcyJdLCJuYW1lcyI6WyJtYWtlUmVxdWVzdCIsInNlYXJjaEl0ZW1zIiwiaXRlbXNTZWFyY2giLCJyZXNwb25zZSIsImRhdGEiLCJzZWFyY2hJdGVtSWQiLCJpdGVtSWQiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FDSUEsV0FESixRQUVPLG9CQUZQOztBQUtBLE9BQU8sTUFBTUMsV0FBVyxHQUFHLE1BQU1DLFdBQU4sSUFBcUI7QUFBQTtBQUM1QyxRQUFNQyxRQUFRLDZCQUFHLE1BQU1ILFdBQVcsQ0FBRSxnQkFBZUUsV0FBWSxFQUE3QixFQUFnQyxLQUFoQyxFQUF1QyxJQUF2QyxDQUFwQixDQUFkO0FBRDRDO0FBRTVDLFNBQU9DLFFBQVEsQ0FBQ0MsSUFBaEI7QUFDSCxDQUhNOztBQUtQLE9BQU8sTUFBTUMsWUFBWSxHQUFHLE1BQU1DLE1BQU4sSUFBZ0I7QUFBQTtBQUN4QyxRQUFNSCxRQUFRLDZCQUFHLE1BQU1ILFdBQVcsQ0FBRSxjQUFhTSxNQUFPLEVBQXRCLEVBQXlCLEtBQXpCLEVBQWdDLElBQWhDLENBQXBCLENBQWQ7QUFEd0M7QUFHeEMsU0FBT0gsUUFBUSxDQUFDQyxJQUFULENBQWNHLElBQXJCO0FBQ0gsQ0FKTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgbWFrZVJlcXVlc3Rcbn0gZnJvbSAnLi4vbGliL21ha2VSZXF1ZXN0J1xuXG5cbmV4cG9ydCBjb25zdCBzZWFyY2hJdGVtcyA9IGFzeW5jIGl0ZW1zU2VhcmNoID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG1ha2VSZXF1ZXN0KGAvYXBpL2l0ZW1zP3E9JHtpdGVtc1NlYXJjaH1gLCAnZ2V0JywgbnVsbCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoSXRlbUlkID0gYXN5bmMgaXRlbUlkID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG1ha2VSZXF1ZXN0KGAvYXBpL2l0ZW1zLyR7aXRlbUlkfWAsICdnZXQnLCBudWxsKTtcblxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLml0ZW07XG59OyJdfQ==