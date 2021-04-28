function cov_2k8ty86q1f() {
  var path = "/Users/bardelvitto/Documents/ecommerce-challenge3/src/services/searchCategories.js";
  var hash = "4dd935983602b7be3fce9843088195fade07f7f0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/bardelvitto/Documents/ecommerce-challenge3/src/services/searchCategories.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 32
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 21
        },
        end: {
          line: 6,
          column: 84
        }
      },
      "2": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 25
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 32
          },
          end: {
            line: 5,
            column: 33
          }
        },
        loc: {
          start: {
            line: 5,
            column: 52
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4dd935983602b7be3fce9843088195fade07f7f0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2k8ty86q1f = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2k8ty86q1f();
import { makeRequest } from '../lib/makeRequest';
cov_2k8ty86q1f().s[0]++;
export const searchCategories = async categoryId => {
  cov_2k8ty86q1f().f[0]++;
  const response = (cov_2k8ty86q1f().s[1]++, await makeRequest(`/api/categories/${categoryId}`, 'get', null));
  cov_2k8ty86q1f().s[2]++;
  return response.data;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaENhdGVnb3JpZXMuanMiXSwibmFtZXMiOlsibWFrZVJlcXVlc3QiLCJzZWFyY2hDYXRlZ29yaWVzIiwiY2F0ZWdvcnlJZCIsInJlc3BvbnNlIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FDSUEsV0FESixRQUVPLG9CQUZQOztBQUlBLE9BQU8sTUFBTUMsZ0JBQWdCLEdBQUcsTUFBTUMsVUFBTixJQUFvQjtBQUFBO0FBQ2hELFFBQU1DLFFBQVEsNkJBQUcsTUFBTUgsV0FBVyxDQUFFLG1CQUFrQkUsVUFBVyxFQUEvQixFQUFrQyxLQUFsQyxFQUF5QyxJQUF6QyxDQUFwQixDQUFkO0FBRGdEO0FBRWhELFNBQU9DLFFBQVEsQ0FBQ0MsSUFBaEI7QUFDSCxDQUhNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBtYWtlUmVxdWVzdFxufSBmcm9tICcuLi9saWIvbWFrZVJlcXVlc3QnXG5cbmV4cG9ydCBjb25zdCBzZWFyY2hDYXRlZ29yaWVzID0gYXN5bmMgY2F0ZWdvcnlJZCA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtYWtlUmVxdWVzdChgL2FwaS9jYXRlZ29yaWVzLyR7Y2F0ZWdvcnlJZH1gLCAnZ2V0JywgbnVsbCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59OyJdfQ==