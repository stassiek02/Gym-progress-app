(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    120(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return addItem;
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return removeItem;
        });
      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        287,
      );

      var addItem = function addItem(itemContent) {
        return {
          type: 'ADD_ITEM',
          payload: {
            item: Object(
              C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__.a,
            )(
              {
                id: (function getId() {
                  return '_'.concat(
                    Math.random()
                      .toString(36)
                      .substr(2, 9),
                    ';\n    ',
                  );
                })(),
              },
              itemContent,
            ),
          },
        };
      };

      var removeItem = function removeItem(id) {
        return { type: 'REMOVE_ITEM', payload: { id } };
      };
    },
    121(module, __webpack_exports__, __webpack_require__) {
      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        128,
      );

      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        122,
      );

      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        123,
      );

      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        129,
      );

      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        124,
      );

      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        130,
      );

      const react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0);

      const react__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_6__,
      );

      const components_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74);

      const components_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46);

      const formik__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(282);

      const AddExerciseForm = (function(_Component) {
        function AddExerciseForm() {
          let _getPrototypeOf2;
          let _this;
          Object(
            C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a,
          )(this, AddExerciseForm);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
            args[_key] = arguments[_key];
          return (
            ((_this = Object(
              C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a,
            )(
              this,
              (_getPrototypeOf2 = Object(
                C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a,
              )(AddExerciseForm)).call.apply(_getPrototypeOf2, [this].concat(args)),
            )).state = { exercise: [] }),
            _this
          );
        }
        return (
          Object(
            C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a,
          )(AddExerciseForm, _Component),
          Object(
            C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a,
          )(AddExerciseForm, [
            {
              key: 'render',
              value: function render() {
                const _this2 = this;

                const getExercises = this.props.getExercises;
                return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                    formik__WEBPACK_IMPORTED_MODULE_9__.a,
                    {
                      initialValues: { name: '', sets: '', reps: '' },
                      onSubmit: function onSubmit(values, a) {
                        a.resetForm();
                        const newExercise = values;
                        _this2.setState(function(prevState) {
                          return {
                            exercise: [].concat(
                              Object(
                                C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a,
                              )(prevState.exercise),
                              [newExercise],
                            ),
                          };
                        }),
                          getExercises(values);
                      },
                    },
                    function(_ref) {
                      const values = _ref.values;

                      const handleChange = _ref.handleChange;

                      const handleBlur = _ref.handleBlur;

                      const handleSubmit = _ref.handleSubmit;
                      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                        'form',
                        { onSubmit: handleSubmit },
                        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                          components_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_7__.a,
                          {
                            type: 'text',
                            name: 'name',
                            onChange: handleChange,
                            onBlur: handleBlur,
                            value: values.name,
                            placeholder: 'Exercise',
                          },
                        ),
                        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                          components_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_7__.a,
                          {
                            type: 'number',
                            name: 'sets',
                            onChange: handleChange,
                            onBlur: handleBlur,
                            placeholder: 'Sets',
                            value: values.sets,
                          },
                        ),
                        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                          components_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_7__.a,
                          {
                            type: 'number',
                            name: 'reps',
                            onChange: handleChange,
                            onBlur: handleBlur,
                            value: values.reps,
                            placeholder: 'Reps',
                          },
                        ),
                        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                          components_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                          { type: 'submit' },
                          'Add new exercise',
                        ),
                      );
                    },
                  ),
                );
              },
            },
          ]),
          AddExerciseForm
        );
      })(react__WEBPACK_IMPORTED_MODULE_6__.Component);
      __webpack_exports__.a = AddExerciseForm;
    },
    131(module, __webpack_exports__, __webpack_require__) {
      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        4,
      );
      function _templateObject() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )([
          '\n  display: block;\n  width: 60px;\n  height: 60px;\n\n  background-image: url(',
          ');\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: 100%;\n  border: none;\n  background-color: ',
          ';\n',
        ]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      const ButtonIcon = __webpack_require__(3).c.button(
        _templateObject(),
        function(_ref) {
          return _ref.icon;
        },
        function(_ref2) {
          return _ref2.theme.primary;
        },
      );
      __webpack_exports__.a = ButtonIcon;
    },
    268(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return theme;
      });
      var theme = {
        primary: '#303439',
        secondary: '#D94E5B',
        thin: 300,
        normal: 400,
        semiBold: 500,
        bold: 600,
        fontSize: { s: '1rem', m: '1.6rem', l: '1.8rem', xl: '2.2rem' },
      };
    },
    271(module, exports, __webpack_require__) {
      module.exports = `${__webpack_require__.p}static/media/graph.0f8ed3f1.svg`;
    },
    272(module, exports, __webpack_require__) {
      module.exports = `${__webpack_require__.p}static/media/logout.0969c92b.svg`;
    },
    273(module, exports, __webpack_require__) {
      module.exports = `${__webpack_require__.p}static/media/pen.4ef96cef.svg`;
    },
    274(module, __webpack_exports__, __webpack_require__) {
      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        4,
      );

      const react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);

      const react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_1__,
      );

      const styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);

      const components_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);

      const components_atoms_ExerciseBlock_ExerciseBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        72,
      );

      const components_atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73);

      const react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(127);

      const actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(120);
      function _templateObject4() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )([
          '\n  position:absolute;\n  top:0;\n  right:0;\n  padding:0;\n  width:30px;\n  height:30px;\n  font-size:',
          '\n  text-align:center;\n  cursor:pointer;\n',
        ]);
        return (
          (_templateObject4 = function _templateObject4() {
            return data;
          }),
          data
        );
      }
      function _templateObject3() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )(['\n  border-bottom: 1px solid ', ';\n  text-align: center;\n  position: relative;\n']);
        return (
          (_templateObject3 = function _templateObject3() {
            return data;
          }),
          data
        );
      }
      function _templateObject2() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )([
          '\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  padding: 50px 30px;\n',
        ]);
        return (
          (_templateObject2 = function _templateObject2() {
            return data;
          }),
          data
        );
      }
      function _templateObject() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )([
          '\n  min-height: 300px;\n  background-color: ',
          ';\n  transition: 0.2s transform, box-shadow 0.2s;\n  &:hover {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.2);\n  }\n\n  @media (max-width: 860px) {\n    width: 35vw;\n  }\n  @media (max-width: 120px) {\n    width: 40vw;\n  }\n',
        ]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.c.div(
        _templateObject(),
        function(_ref) {
          return _ref.theme.primary;
        },
      );

      const ExerciseWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.c.div(
        _templateObject2(),
      );

      const InnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.c.div(
        _templateObject3(),
        function(_ref2) {
          return _ref2.theme.secondary;
        },
      );

      const StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(
        components_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_3__.a,
      )(_templateObject4(), function(_ref3) {
        return _ref3.theme.fontSize.xl;
      });

      const Card = function Card(_ref4) {
        const workout = _ref4.workout;

        const removeItem = _ref4.removeItem;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          StyledWrapper,
          null,
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            InnerWrapper,
            null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              components_atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_5__.a,
              { as: 'h2', big: !0 },
              workout.workoutName,
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              StyledButton,
              {
                onClick: function onClick() {
                  return removeItem(workout.id);
                },
              },
              'X',
            ),
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ExerciseWrapper,
            null,
            workout.exercises.map(function(item) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                components_atoms_ExerciseBlock_ExerciseBlock__WEBPACK_IMPORTED_MODULE_4__.a,
                { parameters: item },
              );
            }),
          ),
        );
      };
      (__webpack_exports__.a = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__.a)(
        null,
        function mapDispatchToProps(dispatch) {
          return {
            removeItem: function removeItem(id) {
              return dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_7__.b)(id));
            },
          };
        },
      )(Card)),
        (Card.__docgenInfo = { description: '', methods: [], displayName: 'Card' }),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src\\components\\molecules\\Card\\Card.js'] = {
            name: 'Card',
            docgenInfo: Card.__docgenInfo,
            path: 'src\\components\\molecules\\Card\\Card.js',
          });
    },
    279(module, __webpack_exports__, __webpack_require__) {
      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        128,
      );

      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        122,
      );

      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        123,
      );

      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        129,
      );

      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        124,
      );

      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        130,
      );

      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        4,
      );

      const react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);

      const react__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_7__,
      );

      const styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);

      const components_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74);

      const components_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46);

      const components_organisms_AddExerciseForm_AddExerciseForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        121,
      );

      const components_atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
        73,
      );

      const components_atoms_ExerciseBlock_ExerciseBlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
        72,
      );

      const actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(120);

      const react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(127);
      function _templateObject5() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.a,
        )(['\n  display: grid;\n  grid-template-columns: auto auto auto;\n  min-height: 100px;\n']);
        return (
          (_templateObject5 = function _templateObject5() {
            return data;
          }),
          data
        );
      }
      function _templateObject4() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.a,
        )(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n']);
        return (
          (_templateObject4 = function _templateObject4() {
            return data;
          }),
          data
        );
      }
      function _templateObject3() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.a,
        )(['\n  margin-bottom: 20px;\n']);
        return (
          (_templateObject3 = function _templateObject3() {
            return data;
          }),
          data
        );
      }
      function _templateObject2() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.a,
        )(['\n      transform: translate(0);\n    ']);
        return (
          (_templateObject2 = function _templateObject2() {
            return data;
          }),
          data
        );
      }
      function _templateObject() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__.a,
        )([
          '\n  position: absolute;\n  top: 30%;\n  left: 40%;\n  width: 500px;\n  min-height: 500px;\n  background-color: #44494f;\n  display: grid;\n  align-items: center;\n  transform: translate(-0, -200%);\n  transition: 0.3s transform ease-in-out;\n  z-index: 9999;\n  ',
          '\n',
        ]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__.c.div(
        _templateObject(),
        function(_ref) {
          return (
            _ref.FormActive &&
            Object(styled_components__WEBPACK_IMPORTED_MODULE_8__.b)(_templateObject2())
          );
        },
      );

      const StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__.c)(
        components_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_10__.a,
      )(_templateObject3());

      const InnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__.c.div(_templateObject4());

      const ExercisesList = styled_components__WEBPACK_IMPORTED_MODULE_8__.c.div(
        _templateObject5(),
      );

      const AddWorkout = (function(_Component) {
        function AddWorkout() {
          let _getPrototypeOf2;
          let _this;
          Object(
            C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a,
          )(this, AddWorkout);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
            args[_key] = arguments[_key];
          return (
            ((_this = Object(
              C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.a,
            )(
              this,
              (_getPrototypeOf2 = Object(
                C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.a,
              )(AddWorkout)).call.apply(_getPrototypeOf2, [this].concat(args)),
            )).state = { exercises: [], workoutName: '' }),
            (_this.getExercises = function(values) {
              const newExercise = values;
              _this.setState(function(prevState) {
                return {
                  exercises: [].concat(
                    Object(
                      C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a,
                    )(prevState.exercises),
                    [newExercise],
                  ),
                };
              });
            }),
            (_this.handleChange = function(event) {
              _this.setState({ workoutName: event.target.value }), console.log(_this.state);
            }),
            (_this.sendWorkoutToState = function() {
              const day = {
                workoutName: _this.state.workoutName,
                exercises: _this.state.exercises,
              };
              (0, _this.props.addItem)(day),
                _this.setState({ Workout: day, exercises: [], workoutName: '' });
            }),
            _this
          );
        }
        return (
          Object(
            C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a,
          )(AddWorkout, _Component),
          Object(
            C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a,
          )(AddWorkout, [
            {
              key: 'render',
              value: function render() {
                const _this2 = this;

                const _this$state = this.state;

                const workoutName = _this$state.workoutName;

                const exercises = _this$state.exercises;

                const _this$props = this.props;

                const FormActive = _this$props.FormActive;

                const toggleForm = _this$props.toggleForm;
                return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                  StyledWrapper,
                  { FormActive },
                  react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                    InnerWrapper,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                      components_atoms_Input_Input__WEBPACK_IMPORTED_MODULE_9__.a,
                      {
                        placeholder: 'Workout Name',
                        value: workoutName,
                        onChange: this.handleChange,
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                      components_organisms_AddExerciseForm_AddExerciseForm__WEBPACK_IMPORTED_MODULE_11__.a,
                      { getExercises: this.getExercises },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                      components_atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_12__.a,
                      null,
                      'List of exercises:',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                      ExercisesList,
                      null,
                      exercises.length !== 0
                        ? exercises.map(function(item) {
                            return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                              components_atoms_ExerciseBlock_ExerciseBlock__WEBPACK_IMPORTED_MODULE_13__.a,
                              { parameters: item },
                            );
                          })
                        : null,
                    ),
                    react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
                      StyledButton,
                      {
                        onClick: function onClick() {
                          return _this2.sendWorkoutToState(_this2.state), toggleForm();
                        },
                      },
                      'Sumbmit Workout',
                    ),
                  ),
                );
              },
            },
          ]),
          AddWorkout
        );
      })(react__WEBPACK_IMPORTED_MODULE_7__.Component);
      AddWorkout.defaultProps = { FormActive: !1 };
      __webpack_exports__.a = Object(react_redux__WEBPACK_IMPORTED_MODULE_15__.a)(
        null,
        function mapDispatchToProps(dispatch) {
          return {
            addItem: function addItem(itemContent) {
              return dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_14__.a)(itemContent));
            },
          };
        },
      )(AddWorkout);
    },
    281(module, __webpack_exports__, __webpack_require__) {
      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        283,
      );

      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        4,
      );

      const react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);

      const react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_2__,
      );

      const styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
      function _templateObject2() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a,
        )([
          '\n  position: relative;\n  right: 0;\n  left: 0;\n  top: 15px;\n  transition: 0.3s all;\n  color: white;\n  font-size: 4rem;\n  pointer-events: none;\n  user-select: none;\n',
        ]);
        return (
          (_templateObject2 = function _templateObject2() {
            return data;
          }),
          data
        );
      }
      function _templateObject() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a,
        )([
          '\n  position: fixed;\n  width: 150px;\n  top: 0;\n  left: 0;\n  padding: 25px 0;\n  height: 100vh;\n  background-color: ',
          ';\n  z-index: -1;\n',
        ]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.c.nav(
        _templateObject(),
        function(_ref) {
          return _ref.theme.primary;
        },
      );

      const MenuText = styled_components__WEBPACK_IMPORTED_MODULE_3__.c.span(_templateObject2());
      function SideBar() {
        const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1);

        const _useState2 = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a,
        )(_useState, 2);

        const visible = _useState2[0];

        const setVisible = _useState2[1];
        function toggleMenu() {
          setVisible(!1 === visible);
        }
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,
          null,
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            Wrapper,
            {
              isVisible: visible,
              onMouseEnter: function onMouseEnter() {
                return toggleMenu();
              },
              onMouseLeave: function onMouseLeave() {
                return toggleMenu();
              },
            },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              MenuText,
              { isVisible: visible },
              'MENU',
            ),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('ul', null),
          ),
        );
      }
      (__webpack_exports__.a = SideBar),
        (SideBar.__docgenInfo = { description: '', methods: [], displayName: 'SideBar' }),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src\\components\\organisms\\Sidebar\\Sidebar.js'] = {
            name: 'SideBar',
            docgenInfo: SideBar.__docgenInfo,
            path: 'src\\components\\organisms\\Sidebar\\Sidebar.js',
          });
    },
    288(module, exports, __webpack_require__) {
      __webpack_require__(289),
        __webpack_require__(392),
        (module.exports = __webpack_require__(393));
    },
    393(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

          const react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );

          const _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);

          const styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);

          const _src_theme_mainTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(268);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(function(story) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              styled_components__WEBPACK_IMPORTED_MODULE_2__.a,
              { theme: _src_theme_mainTheme__WEBPACK_IMPORTED_MODULE_3__.a },
              story(),
            );
          }),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(function loadStories() {
              const req = __webpack_require__(550);
              req.keys().forEach(function(filename) {
                return req(filename);
              });
            }, module);
        }.call(this, __webpack_require__(26)(module));
    },
    46(module, __webpack_exports__, __webpack_require__) {
      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        4,
      );

      const styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
      function _templateObject2() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )(['\n      background-color: ', ';\n    ']);
        return (
          (_templateObject2 = function _templateObject2() {
            return data;
          }),
          data
        );
      }
      function _templateObject() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )([
          "\n  display: block;\n  font-family: 'Montserrat';\n  font-size: ",
          ';\n  font-weight: ',
          ';\n  width: 220px;\n  padding: 10px 25px;\n  color: white;\n  background-color: ',
          ';\n  border: 0;\n  margin: 0 auto;\n  transition: 0.2s background-color;\n  &:hover {\n    background-color: rgb(217, 78, 91, 0.8);\n  }\n\n  ',
          '\n',
        ]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      const Button = styled_components__WEBPACK_IMPORTED_MODULE_1__.c.button(
        _templateObject(),
        function(_ref) {
          return _ref.theme.fontSize.m;
        },
        function(_ref2) {
          return _ref2.theme.normal;
        },
        function(_ref3) {
          return _ref3.theme.secondary;
        },
        function(_ref4) {
          return (
            _ref4.secondary &&
            Object(styled_components__WEBPACK_IMPORTED_MODULE_1__.b)(_templateObject2(), function(
              _ref5,
            ) {
              return _ref5.theme.secondary;
            })
          );
        },
      );
      __webpack_exports__.a = Button;
    },
    550(module, exports, __webpack_require__) {
      const map = {
        './atoms/Button/Button.stories.js': 551,
        './atoms/ButtonIcon/ButtonIcon.stories.js': 566,
        './atoms/ExerciseBlock/ExerciseBlok.stories.js': 567,
        './atoms/Input/Input.stories.js': 568,
        './molecules/Card/Card.stories.js': 569,
        './organisms/AddExerciseForm/AddExerciseForm.stories.js': 570,
        './organisms/AddWorkoutForm/AddWorkoutForm.stories.js': 574,
        './organisms/Sidebar/Sidebar.stories.js': 575,
      };
      function webpackContext(req) {
        const id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          const e = new Error(`Cannot find module '${req}'`);
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 550);
    },
    551(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

          const react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );

          const _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);

          const _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(119);

          const _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)('Atoms/Button', module)
            .addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.withKnobs)
            .add('Primary', function() {
              const value = Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__.select)(
                'Colors',
                {
                  Primary: 'hsl(49,100%,58%)',
                  Secondary: 'hsl(196,83%,75%)',
                  Tertiary: 'hsl(106,47%,64%)',
                  Rainbow: ['red', 'orange', 'etc'],
                  None: null,
                },
                'red',
                'GROUP-ID1',
              );
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                { color: value },
                'Hello World',
              );
            })
            .add('Secondary', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Button__WEBPACK_IMPORTED_MODULE_3__.a,
                { secondary: !0 },
                'Hello World',
              );
            });
        }.call(this, __webpack_require__(26)(module));
    },
    566(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            4,
          );

          const react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);

          const react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_1__,
          );

          const styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);

          const _storybook_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);

          const assets_icons_graph_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(271);

          const assets_icons_graph_svg__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
            assets_icons_graph_svg__WEBPACK_IMPORTED_MODULE_4__,
          );

          const assets_icons_logout_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(272);

          const assets_icons_logout_svg__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
            assets_icons_logout_svg__WEBPACK_IMPORTED_MODULE_5__,
          );

          const assets_icons_pen_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(273);

          const assets_icons_pen_svg__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
            assets_icons_pen_svg__WEBPACK_IMPORTED_MODULE_6__,
          );

          const _ButtonIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(131);
          function _templateObject() {
            const data = Object(
              C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
            )([
              '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 500px;\n  height: 500px;\n  background: ',
              ';\n',
            ]);
            return (
              (_templateObject = function _templateObject() {
                return data;
              }),
              data
            );
          }
          const YellowBackground = styled_components__WEBPACK_IMPORTED_MODULE_2__.c.div(
            _templateObject(),
            function(_ref) {
              return _ref.theme.primary;
            },
          );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)(
            'Atoms/ButtonIcon',
            module,
          )
            .addDecorator(function(story) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                YellowBackground,
                null,
                story(),
              );
            })
            .add('Logout', function() {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _ButtonIcon__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  icon: assets_icons_logout_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
                  active: !0,
                },
              );
            })
            .add('Pen', function() {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _ButtonIcon__WEBPACK_IMPORTED_MODULE_7__.a,
                { icon: assets_icons_pen_svg__WEBPACK_IMPORTED_MODULE_6___default.a },
              );
            })
            .add('Graph', function() {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _ButtonIcon__WEBPACK_IMPORTED_MODULE_7__.a,
                { icon: assets_icons_graph_svg__WEBPACK_IMPORTED_MODULE_4___default.a },
              );
            });
        }.call(this, __webpack_require__(26)(module));
    },
    567(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

          const react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );

          const _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);

          const _ExerciseBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Atoms/ExerciseBlock',
            module,
          ).add('Secondary', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _ExerciseBlock__WEBPACK_IMPORTED_MODULE_2__.a,
              { name: 'Squat', sets: '5', reps: '10' },
            );
          });
        }.call(this, __webpack_require__(26)(module));
    },
    568(module, exports) {},
    569(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

          const react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );

          const _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);

          const _Card__WEBPACK_IMPORTED_MODULE_3__ =
            (__webpack_require__(119), __webpack_require__(274));
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Molecules/Card',
            module,
          ).add('Normal', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _Card__WEBPACK_IMPORTED_MODULE_3__.a,
              null,
            );
          });
        }.call(this, __webpack_require__(26)(module));
    },
    570(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

          const react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );

          const _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);

          const _AddExerciseForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(121);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Organisms/AddFormExercise',
            module,
          ).add('First', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _AddExerciseForm__WEBPACK_IMPORTED_MODULE_2__.a,
              null,
            );
          });
        }.call(this, __webpack_require__(26)(module));
    },
    574(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

          const react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );

          const _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);

          const _AddWorkoutForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(279);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Organisms/Addworkout',
            module,
          ).add('First', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _AddWorkoutForm__WEBPACK_IMPORTED_MODULE_2__.a,
              null,
            );
          });
        }.call(this, __webpack_require__(26)(module));
    },
    575(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          const react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

          const react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__,
          );

          const _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);

          const storybook_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(280);

          const storybook_react_router__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
            storybook_react_router__WEBPACK_IMPORTED_MODULE_2__,
          );

          const _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(281);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Organisms/Sidebar',
            module,
          )
            .addDecorator(storybook_react_router__WEBPACK_IMPORTED_MODULE_2___default()())
            .add('Normal', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Sidebar__WEBPACK_IMPORTED_MODULE_3__.a,
                null,
              );
            });
        }.call(this, __webpack_require__(26)(module));
    },
    72(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return ExerciseBlock;
      });
      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        4,
      );

      const react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);

      const react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_1__,
      );

      const styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);

      const components_atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73);
      function _templateObject3() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )(['\n  padding: 10px;\n  margin: 0;\n  position: relative;\n  text-align: center;\n']);
        return (
          (_templateObject3 = function _templateObject3() {
            return data;
          }),
          data
        );
      }
      function _templateObject2() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )([
          '\n  text-align: center;\n  border-bottom: 1px solid ',
          ';\n  margin: 0 auto;\n  padding: 5px;\n  overflow: hidden;\n  display: block;\n',
        ]);
        return (
          (_templateObject2 = function _templateObject2() {
            return data;
          }),
          data
        );
      }
      function _templateObject() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )([
          '\n  display: inline-block;\n  color: white;\n  background-color: transparent;\n  min-width: 150px;\n  margin: 5px;\n',
        ]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__.c.div(_templateObject());

      const StyledHeading = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__.c)(
        components_atoms_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__.a,
      )(_templateObject2(), function(_ref) {
        return _ref.theme.secondary;
      });

      const StyledParagraph = styled_components__WEBPACK_IMPORTED_MODULE_2__.c.p(
        _templateObject3(),
      );

      var ExerciseBlock = function ExerciseBlock(_ref2) {
        const parameters = _ref2.parameters;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          StyledWrapper,
          null,
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            StyledHeading,
            { big: !0 },
            parameters.name,
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            StyledParagraph,
            null,
            parameters.sets,
            ' sets of ',
            parameters.reps,
          ),
        );
      };
      (ExerciseBlock.__docgenInfo = { description: '', methods: [], displayName: 'ExerciseBlock' }),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src\\components\\atoms\\ExerciseBlock\\ExerciseBlock.js'] = {
            name: 'ExerciseBlock',
            docgenInfo: ExerciseBlock.__docgenInfo,
            path: 'src\\components\\atoms\\ExerciseBlock\\ExerciseBlock.js',
          });
    },
    73(module, __webpack_exports__, __webpack_require__) {
      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        4,
      );
      function _templateObject() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a,
        )([
          '\n  font-size: ',
          ';\n  font-weight: ',
          ';\n  color: white;\n  display: inline-block;\n',
        ]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      const Heading = __webpack_require__(3).c.h1(
        _templateObject(),
        function(_ref) {
          const theme = _ref.theme;
          return _ref.big ? theme.fontSize.xl : theme.fontSize.l;
        },
        function(_ref2) {
          return _ref2.theme.semiBold;
        },
      );
      __webpack_exports__.a = Heading;
    },
    74(module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Input;
      });
      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        286,
      );

      const C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        4,
      );

      const react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);

      const react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_2__,
      );

      const styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
      function _templateObject3() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a,
        )(['\n  position: relative;\n  margin: 10px;\n']);
        return (
          (_templateObject3 = function _templateObject3() {
            return data;
          }),
          data
        );
      }
      function _templateObject2() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a,
        )([
          '\n  font-weight: 300;\n  position: absolute;\n  top: 15px;\n  left: 10px;\n  transition: 0.2s transform;\n  color: white;\n  pointer-events: none;\n  ',
          ':focus ~ &,\n  ',
          ':not(:focus):valid ~ & {\n    transform: translate(-10px, -15px) scale(0.7);\n  }\n',
        ]);
        return (
          (_templateObject2 = function _templateObject2() {
            return data;
          }),
          data
        );
      }
      function _templateObject() {
        const data = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.a,
        )([
          "\n  margin: 0;\n  padding: 15px;\n  padding-bottom: 5px;\n  border: 0px;\n  border-bottom: 3px solid #505158;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 16px;\n  background-color: transparent;\n  color: white;\n  font-weight: 300;\n",
        ]);
        return (
          (_templateObject = function _templateObject() {
            return data;
          }),
          data
        );
      }
      const InputField = styled_components__WEBPACK_IMPORTED_MODULE_3__.c.input(_templateObject());

      const FieldSpan = styled_components__WEBPACK_IMPORTED_MODULE_3__.c.span(
        _templateObject2(),
        InputField,
        InputField,
      );

      const StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__.c.div(
        _templateObject3(),
      );

      var Input = function Input(_ref) {
        const placeholder = _ref.placeholder;

        const name = _ref.name;

        const value = _ref.value;

        const type = _ref.type;

        const props = Object(
          C_Users_Daniel_Desktop_Gym_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__.a,
        )(_ref, ['placeholder', 'name', 'value', 'type']);
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
          StyledWrapper,
          null,
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            InputField,
            Object.assign({ type, name, value, required: !0 }, props),
          ),
          react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FieldSpan, null, placeholder),
        );
      };
      (Input.defaultProps = { name: '', placeholder: '', value: '', type: 'text' }),
        (Input.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Input',
          props: {
            name: { defaultValue: { value: "''", computed: !1 }, required: !1 },
            placeholder: { defaultValue: { value: "''", computed: !1 }, required: !1 },
            value: { defaultValue: { value: "''", computed: !1 }, required: !1 },
            type: { defaultValue: { value: "'text'", computed: !1 }, required: !1 },
          },
        }),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src\\components\\atoms\\Input\\Input.js'] = {
            name: 'Input',
            docgenInfo: Input.__docgenInfo,
            path: 'src\\components\\atoms\\Input\\Input.js',
          });
    },
  },
  [[288, 1, 2]],
]);
// # sourceMappingURL=main.b7e9ec01eac300b41249.bundle.js.map
