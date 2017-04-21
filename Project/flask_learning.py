from flask import Flask, url_for, request, render_template
# import redis

app = Flask(__name__)
# r = redis.StrictRedis(host='localhost', port=6379, db=0, charset="utf-8", decode_responses=True)
# r.set('haha', 'a')


# alternative ways to connect to redis
# r = redis.StrictRedis()
# r = redis.StrictRedis('localhost', 6379, 0)

@app.route('/')
def hello_world():
    return render_template('initial.html')


@app.route('/create', methods=['GET', 'POST'])
def create():
    if request.method == 'GET':
        return render_template('CreateQuestion.html')
    elif request.method == 'POST':
        title = request.form['title']
        question = request.form['question']
        answer = request.form['answer']
        print('title: ' + title)
        print('question: ' + question)
        print('answer: ' + answer)
        return render_template('CreatedQuestion.html', question=question)
    else:
        return '<h2>This is the create page</h2>'


@app.route('/question/<title>', methods=['GET', 'POST'])
def question(title):
    if request.method == 'GET':
        # question = r.get(title+':question')
        return render_template('AnswerQuestion.html', question=question)
    elif request.method == 'POST':
        submittedAnswer = request.form['submittedAnswer']
        # answer = r.get(title+':answer')
        # if submittedAnswer == answer:
        #     print('you are right')
        #     return render_template('Correct.html')
        # else:
        #     print('you are wrong')
        #     return render_template('Incorrect.html', submittedAnswer=submittedAnswer, answer=answer)
    else:
        return '<h2>' + title + '</h2>'


if __name__ == '__main__':
    app.run()
