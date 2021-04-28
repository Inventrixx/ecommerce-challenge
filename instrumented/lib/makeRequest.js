function cov_16xttdfucn() {
  var path = "/Users/bardelvitto/Documents/ecommerce-challenge3/src/lib/makeRequest.js";
  var hash = "74f950ef391fb237b63edfdab16cf1cf313776b3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/bardelvitto/Documents/ecommerce-challenge3/src/lib/makeRequest.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 14
        },
        end: {
          line: 1,
          column: 30
        }
      },
      "1": {
        start: {
          line: 3,
          column: 27
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "2": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "3": {
        start: {
          line: 6,
          column: 8
        },
        end: {
          line: 6,
          column: 49
        }
      },
      "4": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 21,
          column: 9
        }
      },
      "5": {
        start: {
          line: 9,
          column: 12
        },
        end: {
          line: 20,
          column: 13
        }
      },
      "6": {
        start: {
          line: 11,
          column: 20
        },
        end: {
          line: 14,
          column: 23
        }
      },
      "7": {
        start: {
          line: 16,
          column: 20
        },
        end: {
          line: 19,
          column: 23
        }
      },
      "8": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 27
          },
          end: {
            line: 3,
            column: 28
          }
        },
        loc: {
          start: {
            line: 3,
            column: 55
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 8
          },
          end: {
            line: 21,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 8,
            column: 8
          },
          end: {
            line: 21,
            column: 9
          }
        }, {
          start: {
            line: 8,
            column: 8
          },
          end: {
            line: 21,
            column: 9
          }
        }],
        line: 8
      },
      "1": {
        loc: {
          start: {
            line: 9,
            column: 12
          },
          end: {
            line: 20,
            column: 13
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 14,
            column: 23
          }
        }, {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 19,
            column: 23
          }
        }],
        line: 9
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "74f950ef391fb237b63edfdab16cf1cf313776b3"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_16xttdfucn = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_16xttdfucn();
const axios = (cov_16xttdfucn().s[0]++, require('axios'));
cov_16xttdfucn().s[1]++;
export const makeRequest = async (path, type, data) => {
  cov_16xttdfucn().f[0]++;
  let response;
  cov_16xttdfucn().s[2]++;

  try {
    cov_16xttdfucn().s[3]++;
    response = await axios[type](path, data);
  } catch (e) {
    cov_16xttdfucn().s[4]++;

    if (e.response) {
      cov_16xttdfucn().b[0][0]++;
      cov_16xttdfucn().s[5]++;

      switch (e.response.status) {
        case 403:
          cov_16xttdfucn().b[1][0]++;
          cov_16xttdfucn().s[6]++;
          return Promise.reject({
            type: 'error',
            message: e.response.data.message
          });

        default:
          cov_16xttdfucn().b[1][1]++;
          cov_16xttdfucn().s[7]++;
          return Promise.reject({
            type: 'error',
            message: 'Ha ocurrido un error, intente de nuevo'
          });
      }
    } else {
      cov_16xttdfucn().b[0][1]++;
    }
  }

  cov_16xttdfucn().s[8]++;
  return response;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ha2VSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsIm1ha2VSZXF1ZXN0IiwicGF0aCIsInR5cGUiLCJkYXRhIiwicmVzcG9uc2UiLCJlIiwic3RhdHVzIiwiUHJvbWlzZSIsInJlamVjdCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixNQUFNQSxLQUFLLDZCQUFHQyxPQUFPLENBQUMsT0FBRCxDQUFWLENBQVg7O0FBRUEsT0FBTyxNQUFNQyxXQUFXLEdBQUcsT0FBT0MsSUFBUCxFQUFhQyxJQUFiLEVBQW1CQyxJQUFuQixLQUE0QjtBQUFBO0FBQ25ELE1BQUlDLFFBQUo7QUFEbUQ7O0FBRW5ELE1BQUk7QUFBQTtBQUNBQSxJQUFBQSxRQUFRLEdBQUcsTUFBTU4sS0FBSyxDQUFDSSxJQUFELENBQUwsQ0FBWUQsSUFBWixFQUFrQkUsSUFBbEIsQ0FBakI7QUFDSCxHQUZELENBRUUsT0FBT0UsQ0FBUCxFQUFVO0FBQUE7O0FBQ1IsUUFBSUEsQ0FBQyxDQUFDRCxRQUFOLEVBQWdCO0FBQUE7QUFBQTs7QUFDWixjQUFRQyxDQUFDLENBQUNELFFBQUYsQ0FBV0UsTUFBbkI7QUFDSSxhQUFLLEdBQUw7QUFBQTtBQUFBO0FBQ0ksaUJBQU9DLE9BQU8sQ0FBQ0MsTUFBUixDQUFlO0FBQ2xCTixZQUFBQSxJQUFJLEVBQUUsT0FEWTtBQUVsQk8sWUFBQUEsT0FBTyxFQUFFSixDQUFDLENBQUNELFFBQUYsQ0FBV0QsSUFBWCxDQUFnQk07QUFGUCxXQUFmLENBQVA7O0FBSUo7QUFBQTtBQUFBO0FBQ0ksaUJBQU9GLE9BQU8sQ0FBQ0MsTUFBUixDQUFlO0FBQ2xCTixZQUFBQSxJQUFJLEVBQUUsT0FEWTtBQUVsQk8sWUFBQUEsT0FBTyxFQUFFO0FBRlMsV0FBZixDQUFQO0FBUFI7QUFZSCxLQWJEO0FBQUE7QUFBQTtBQWNIOztBQW5Ca0Q7QUFvQm5ELFNBQU9MLFFBQVA7QUFDSCxDQXJCTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKVxuXG5leHBvcnQgY29uc3QgbWFrZVJlcXVlc3QgPSBhc3luYyAocGF0aCwgdHlwZSwgZGF0YSkgPT4ge1xuICAgIGxldCByZXNwb25zZTtcbiAgICB0cnkge1xuICAgICAgICByZXNwb25zZSA9IGF3YWl0IGF4aW9zW3R5cGVdKHBhdGgsIGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGUucmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5yZXNwb25zZS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdIYSBvY3VycmlkbyB1biBlcnJvciwgaW50ZW50ZSBkZSBudWV2bydcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufTsiXX0=