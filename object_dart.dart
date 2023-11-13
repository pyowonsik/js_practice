class Person {
  final String name;
  final int age;

  Person({required this.name, required this.age});

  void study() {
    return print('이서연이 공부를 합니다.');
  }
}

void main() {
  Map<String, dynamic> person = {
    'name': '표원식',
    'age': 26,
    'study': () {
      return '표원식이 공부를 합니다.';
    }
  };

  final person2 = Person(name: '이서연', age: 24);

  print(person['study']());
  person2.study();

  print(person.runtimeType);
  print(person2.runtimeType);
}
