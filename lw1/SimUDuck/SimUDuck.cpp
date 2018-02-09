#include <cassert>
#include <iostream>
#include <memory>
#include <vector>

using namespace std;

struct IFlyBehavior
{
    virtual ~IFlyBehavior() = default;

    virtual void Fly() = 0;
};

class FlyWithWings : public IFlyBehavior
{
public:
    void Fly() override
    {
        ++m_flyCount;
        cout << "I'm flying with wings!! Flight no = " << m_flyCount << endl;
    }

private:
    int m_flyCount = 0;
};

class FlyNoWay : public IFlyBehavior
{
public:
    void Fly() override
    {
    }
};

struct IQuackBehavior
{
    virtual ~IQuackBehavior() = default;

    virtual void Quack() = 0;
};

class QuackBehavior : public IQuackBehavior
{
public:
    void Quack() override
    {
        cout << "Quack Quack!!!" << endl;
    }
};

class SqueakBehavior : public IQuackBehavior
{
public:
    void Quack() override
    {
        cout << "Squeek!!!" << endl;
    }
};

class MuteQuackBehavior : public IQuackBehavior
{
public:
    void Quack() override
    {
    }
};

struct IDanceBehavior
{
    virtual ~IDanceBehavior()
    {
    };

    virtual void Dance() = 0;
};

class DanceWaltz : public IDanceBehavior
{
public:
    void Dance() override
    {
        cout << "I'm dance waltz!!" << endl;
    }
};

class DanceMinuet : public IDanceBehavior
{
public:
    void Dance() override
    {
        cout << "I'm dance minuet!!" << endl;
    }
};

class NoDance : public IDanceBehavior
{
public:
    void Dance() override
    {
        cout << "I cant dance!!" << endl;
    }
};

class Duck
{
public:
    Duck(unique_ptr<IFlyBehavior> &&flyBehavior, unique_ptr<IQuackBehavior> &&quackBehavior,
         unique_ptr<IDanceBehavior> &&danceBehavior) : m_quackBehavior(move(quackBehavior)),
                                                       m_danceBehavior(move(danceBehavior))
    {
        assert(m_quackBehavior);
        SetFlyBehavior(move(flyBehavior));
        assert(m_danceBehavior);
        SetDanceBehavior(move(m_danceBehavior));
    }

    void Quack() const
    {
        m_quackBehavior->Quack();
    }

    void Swim()
    {
        cout << "I'm swimming" << endl;
    }

    void Fly()
    {
        m_flyBehavior->Fly();
    }

    virtual void Dance()
    {
        m_danceBehavior->Dance();
    }

    void SetFlyBehavior(unique_ptr<IFlyBehavior> &&flyBehavior)
    {
        assert(flyBehavior);
        m_flyBehavior = move(flyBehavior);
    }

    void SetDanceBehavior(unique_ptr<IDanceBehavior> &&danceBehavior)
    {
        assert(danceBehavior);
        m_danceBehavior = move(danceBehavior);
    }

    virtual void Display() const = 0;

    virtual ~Duck() = default;

private:
    unique_ptr<IFlyBehavior> m_flyBehavior;
    unique_ptr<IQuackBehavior> m_quackBehavior;
    unique_ptr<IDanceBehavior> m_danceBehavior;
};

class MallardDuck : public Duck
{
public:
    MallardDuck() : Duck(make_unique<FlyWithWings>(), make_unique<QuackBehavior>(), make_unique<DanceWaltz>())
    {
    }

    void Display() const override
    {
        cout << "I'm mallard duck" << endl;
    }
};

class RedheadDuck : public Duck
{
public:
    RedheadDuck() : Duck(make_unique<FlyWithWings>(), make_unique<QuackBehavior>(), make_unique<DanceMinuet>())
    {
    }

    void Display() const override
    {
        cout << "I'm redhead duck" << endl;
    }
};

class DeckoyDuck : public Duck
{
public:
    DeckoyDuck() : Duck(make_unique<FlyNoWay>(), make_unique<QuackBehavior>(), make_unique<NoDance>())
    {
    }

    void Display() const override
    {
        cout << "I'm deckoy duck" << endl;
    }
};

class RubberDuck : public Duck
{
public:
    RubberDuck() : Duck(make_unique<FlyNoWay>(), make_unique<QuackBehavior>(), make_unique<NoDance>())
    {
    }

    void Display() const override
    {
        cout << "I'm rubber duck" << endl;
    }
};

class ModelDuck : public Duck
{
public:
    ModelDuck() : Duck(make_unique<FlyNoWay>(), make_unique<QuackBehavior>(), make_unique<NoDance>())
    {
    }

    void Display() const override
    {
        cout << "I'm model duck" << endl;
    }
};

void DrawDuck(Duck const &duck)
{
    duck.Display();
}

void PlayWithDuck(Duck &duck)
{
    DrawDuck(duck);
    duck.Quack();
    duck.Fly();
    duck.Dance();
    cout << endl;
}

int main()
{
    MallardDuck mallarDuck;
    PlayWithDuck(mallarDuck);
    PlayWithDuck(mallarDuck);
    PlayWithDuck(mallarDuck);

    RedheadDuck redheadDuck;
    PlayWithDuck(redheadDuck);
    PlayWithDuck(redheadDuck);
    PlayWithDuck(redheadDuck);

    RubberDuck rubberDuck;
    PlayWithDuck(rubberDuck);
    PlayWithDuck(rubberDuck);
    PlayWithDuck(rubberDuck);

    DeckoyDuck deckoyDuck;
    PlayWithDuck(deckoyDuck);
    PlayWithDuck(deckoyDuck);
    PlayWithDuck(deckoyDuck);

    ModelDuck modelDuck;
    PlayWithDuck(modelDuck);
    modelDuck.SetFlyBehavior(make_unique<FlyWithWings>());
    PlayWithDuck(modelDuck);
    PlayWithDuck(modelDuck);
    PlayWithDuck(modelDuck);

    return 0;
}
