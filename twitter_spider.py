import time
import json
import os
from twitter_api_pool import *


def get_friends(tmp_api, user_name):
    friends_list = tmp_api.friends_ids(user_name)
    return friends_list

test_user_name = 'realDonaldTrump'
time_line = api1.user_timeline(test_user_name)
folder_name = 'data/' + test_user_name
if not os.path.exists(folder_name):
    os.mkdir(folder_name)
    print('Finish creating folder')
currentAPI = api1
for status in time_line:
    print('We are collecting retweet data for tweet:', status.id)
    print('Total number of retweets:', status.retweet_count)
    print(status.text)
    tmp_status_id = status.id
    retweet_list = list()
    keep_searching = True
    max_id = 0
    while keep_searching:
        time.sleep(1)
        try:
            if max_id != 0:
                tmp_retweets = currentAPI.retweets(tmp_status_id, counter=100, max_id=max_id - 1)
            else:
                tmp_retweets = currentAPI.retweets(tmp_status_id, counter=100)
        except:
            if currentAPI == api1:
                print('We switch to api2')
                currentAPI = api2
            elif currentAPI == api2:
                print('We switch to api3')
                currentAPI = api3
            elif currentAPI == api3:
                print('We switch to api4')
                currentAPI = api4
            elif currentAPI == api4:
                print('We switch to api5')
                currentAPI = api5
            elif currentAPI == api5:
                print('We switch to api6')
                currentAPI = api6
            elif currentAPI == api6:
                print('We switch to api7')
                currentAPI = api7
            elif currentAPI == api7:
                print('We switch to api8')
                currentAPI = api8
            elif currentAPI == api8:
                print('We switch to api9')
                currentAPI = api9
            elif currentAPI == api9:
                print('We switch to api10')
                currentAPI = api10
            else:
                print('We switch to api1')
                currentAPI = api1
            tmp_retweets = currentAPI.retweets(tmp_status_id, counter=100, max_id=max_id - 1)
        if len(tmp_retweets) == 0:
            print('We have finished collecting retweet data for this tweet')
            keep_searching = False
            break
        for retweet in tmp_retweets:
            retweet_list.append(retweet.author.id)
        max_id = tmp_retweets[-1].id
        print('We have collected: ', len(retweet_list), 'retweets')
    print(retweet_list)
    file_name = folder_name + '/' + str(tmp_status_id) + '_retweets.json'
    file = open(file_name, 'w')
    json.dump(retweet_list, file)
    file.close()
    break
print('end')
