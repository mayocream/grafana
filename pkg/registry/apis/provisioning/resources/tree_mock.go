// Code generated by mockery v2.53.4. DO NOT EDIT.

package resources

import (
	context "context"

	mock "github.com/stretchr/testify/mock"
	unstructured "k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"
)

// MockFolderTree is an autogenerated mock type for the FolderTree type
type MockFolderTree struct {
	mock.Mock
}

type MockFolderTree_Expecter struct {
	mock *mock.Mock
}

func (_m *MockFolderTree) EXPECT() *MockFolderTree_Expecter {
	return &MockFolderTree_Expecter{mock: &_m.Mock}
}

// Add provides a mock function with given fields: folder, parent
func (_m *MockFolderTree) Add(folder Folder, parent string) {
	_m.Called(folder, parent)
}

// MockFolderTree_Add_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Add'
type MockFolderTree_Add_Call struct {
	*mock.Call
}

// Add is a helper method to define mock.On call
//   - folder Folder
//   - parent string
func (_e *MockFolderTree_Expecter) Add(folder interface{}, parent interface{}) *MockFolderTree_Add_Call {
	return &MockFolderTree_Add_Call{Call: _e.mock.On("Add", folder, parent)}
}

func (_c *MockFolderTree_Add_Call) Run(run func(folder Folder, parent string)) *MockFolderTree_Add_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(Folder), args[1].(string))
	})
	return _c
}

func (_c *MockFolderTree_Add_Call) Return() *MockFolderTree_Add_Call {
	_c.Call.Return()
	return _c
}

func (_c *MockFolderTree_Add_Call) RunAndReturn(run func(Folder, string)) *MockFolderTree_Add_Call {
	_c.Run(run)
	return _c
}

// AddUnstructured provides a mock function with given fields: item
func (_m *MockFolderTree) AddUnstructured(item *unstructured.Unstructured) error {
	ret := _m.Called(item)

	if len(ret) == 0 {
		panic("no return value specified for AddUnstructured")
	}

	var r0 error
	if rf, ok := ret.Get(0).(func(*unstructured.Unstructured) error); ok {
		r0 = rf(item)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// MockFolderTree_AddUnstructured_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'AddUnstructured'
type MockFolderTree_AddUnstructured_Call struct {
	*mock.Call
}

// AddUnstructured is a helper method to define mock.On call
//   - item *unstructured.Unstructured
func (_e *MockFolderTree_Expecter) AddUnstructured(item interface{}) *MockFolderTree_AddUnstructured_Call {
	return &MockFolderTree_AddUnstructured_Call{Call: _e.mock.On("AddUnstructured", item)}
}

func (_c *MockFolderTree_AddUnstructured_Call) Run(run func(item *unstructured.Unstructured)) *MockFolderTree_AddUnstructured_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(*unstructured.Unstructured))
	})
	return _c
}

func (_c *MockFolderTree_AddUnstructured_Call) Return(_a0 error) *MockFolderTree_AddUnstructured_Call {
	_c.Call.Return(_a0)
	return _c
}

func (_c *MockFolderTree_AddUnstructured_Call) RunAndReturn(run func(*unstructured.Unstructured) error) *MockFolderTree_AddUnstructured_Call {
	_c.Call.Return(run)
	return _c
}

// Count provides a mock function with no fields
func (_m *MockFolderTree) Count() int {
	ret := _m.Called()

	if len(ret) == 0 {
		panic("no return value specified for Count")
	}

	var r0 int
	if rf, ok := ret.Get(0).(func() int); ok {
		r0 = rf()
	} else {
		r0 = ret.Get(0).(int)
	}

	return r0
}

// MockFolderTree_Count_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Count'
type MockFolderTree_Count_Call struct {
	*mock.Call
}

// Count is a helper method to define mock.On call
func (_e *MockFolderTree_Expecter) Count() *MockFolderTree_Count_Call {
	return &MockFolderTree_Count_Call{Call: _e.mock.On("Count")}
}

func (_c *MockFolderTree_Count_Call) Run(run func()) *MockFolderTree_Count_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run()
	})
	return _c
}

func (_c *MockFolderTree_Count_Call) Return(_a0 int) *MockFolderTree_Count_Call {
	_c.Call.Return(_a0)
	return _c
}

func (_c *MockFolderTree_Count_Call) RunAndReturn(run func() int) *MockFolderTree_Count_Call {
	_c.Call.Return(run)
	return _c
}

// DirPath provides a mock function with given fields: folder, baseFolder
func (_m *MockFolderTree) DirPath(folder string, baseFolder string) (Folder, bool) {
	ret := _m.Called(folder, baseFolder)

	if len(ret) == 0 {
		panic("no return value specified for DirPath")
	}

	var r0 Folder
	var r1 bool
	if rf, ok := ret.Get(0).(func(string, string) (Folder, bool)); ok {
		return rf(folder, baseFolder)
	}
	if rf, ok := ret.Get(0).(func(string, string) Folder); ok {
		r0 = rf(folder, baseFolder)
	} else {
		r0 = ret.Get(0).(Folder)
	}

	if rf, ok := ret.Get(1).(func(string, string) bool); ok {
		r1 = rf(folder, baseFolder)
	} else {
		r1 = ret.Get(1).(bool)
	}

	return r0, r1
}

// MockFolderTree_DirPath_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'DirPath'
type MockFolderTree_DirPath_Call struct {
	*mock.Call
}

// DirPath is a helper method to define mock.On call
//   - folder string
//   - baseFolder string
func (_e *MockFolderTree_Expecter) DirPath(folder interface{}, baseFolder interface{}) *MockFolderTree_DirPath_Call {
	return &MockFolderTree_DirPath_Call{Call: _e.mock.On("DirPath", folder, baseFolder)}
}

func (_c *MockFolderTree_DirPath_Call) Run(run func(folder string, baseFolder string)) *MockFolderTree_DirPath_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(string), args[1].(string))
	})
	return _c
}

func (_c *MockFolderTree_DirPath_Call) Return(_a0 Folder, _a1 bool) *MockFolderTree_DirPath_Call {
	_c.Call.Return(_a0, _a1)
	return _c
}

func (_c *MockFolderTree_DirPath_Call) RunAndReturn(run func(string, string) (Folder, bool)) *MockFolderTree_DirPath_Call {
	_c.Call.Return(run)
	return _c
}

// In provides a mock function with given fields: folder
func (_m *MockFolderTree) In(folder string) bool {
	ret := _m.Called(folder)

	if len(ret) == 0 {
		panic("no return value specified for In")
	}

	var r0 bool
	if rf, ok := ret.Get(0).(func(string) bool); ok {
		r0 = rf(folder)
	} else {
		r0 = ret.Get(0).(bool)
	}

	return r0
}

// MockFolderTree_In_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'In'
type MockFolderTree_In_Call struct {
	*mock.Call
}

// In is a helper method to define mock.On call
//   - folder string
func (_e *MockFolderTree_Expecter) In(folder interface{}) *MockFolderTree_In_Call {
	return &MockFolderTree_In_Call{Call: _e.mock.On("In", folder)}
}

func (_c *MockFolderTree_In_Call) Run(run func(folder string)) *MockFolderTree_In_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(string))
	})
	return _c
}

func (_c *MockFolderTree_In_Call) Return(_a0 bool) *MockFolderTree_In_Call {
	_c.Call.Return(_a0)
	return _c
}

func (_c *MockFolderTree_In_Call) RunAndReturn(run func(string) bool) *MockFolderTree_In_Call {
	_c.Call.Return(run)
	return _c
}

// Walk provides a mock function with given fields: ctx, fn
func (_m *MockFolderTree) Walk(ctx context.Context, fn WalkFunc) error {
	ret := _m.Called(ctx, fn)

	if len(ret) == 0 {
		panic("no return value specified for Walk")
	}

	var r0 error
	if rf, ok := ret.Get(0).(func(context.Context, WalkFunc) error); ok {
		r0 = rf(ctx, fn)
	} else {
		r0 = ret.Error(0)
	}

	return r0
}

// MockFolderTree_Walk_Call is a *mock.Call that shadows Run/Return methods with type explicit version for method 'Walk'
type MockFolderTree_Walk_Call struct {
	*mock.Call
}

// Walk is a helper method to define mock.On call
//   - ctx context.Context
//   - fn WalkFunc
func (_e *MockFolderTree_Expecter) Walk(ctx interface{}, fn interface{}) *MockFolderTree_Walk_Call {
	return &MockFolderTree_Walk_Call{Call: _e.mock.On("Walk", ctx, fn)}
}

func (_c *MockFolderTree_Walk_Call) Run(run func(ctx context.Context, fn WalkFunc)) *MockFolderTree_Walk_Call {
	_c.Call.Run(func(args mock.Arguments) {
		run(args[0].(context.Context), args[1].(WalkFunc))
	})
	return _c
}

func (_c *MockFolderTree_Walk_Call) Return(_a0 error) *MockFolderTree_Walk_Call {
	_c.Call.Return(_a0)
	return _c
}

func (_c *MockFolderTree_Walk_Call) RunAndReturn(run func(context.Context, WalkFunc) error) *MockFolderTree_Walk_Call {
	_c.Call.Return(run)
	return _c
}

// NewMockFolderTree creates a new instance of MockFolderTree. It also registers a testing interface on the mock and a cleanup function to assert the mocks expectations.
// The first argument is typically a *testing.T value.
func NewMockFolderTree(t interface {
	mock.TestingT
	Cleanup(func())
}) *MockFolderTree {
	mock := &MockFolderTree{}
	mock.Mock.Test(t)

	t.Cleanup(func() { mock.AssertExpectations(t) })

	return mock
}
