#include <v8.h>
#include <node.h>

using namespace v8;

Handle<Value> Method(const Arguments &args)
{
  HandleScope scope;
 
  int limit = args[0]->Int32Value();
  int result = 0;
  for(int i = 1; i <= limit; i++) {
    result += i;
  }
  return Number::New(result);
}

extern "C" void init(Handle<Object> target)
{
  target->Set(String::New("Name"), String::New("Value"));
  NODE_SET_METHOD(target, "method", Method);
}

NODE_MODULE(module_name, init)
