#!/usr/bin/env python
# -*- coding: utf-8 -*-

from ldap3 import Server, Connection, \
    AUTH_SIMPLE, STRATEGY_SYNC, GET_ALL_INFO, LDAPBindError
import json


print("Content-type: application/json")
print("\n\n")


user_dict = {'charlotte':'dunois', 'laura':'bodewig',
               'houki':'shinonono', 'cecilia':'alcott', 'lingyin':'huang'}
server = 'trileg.net'
port = 50389
base_dn = 'ou=People,dc=trileg,dc=net'

output = ''

for k, v in user_dict.items():
    user_dn = 'uid='+k+','+base_dn
    s = Server(server, port=port, get_info=GET_ALL_INFO)
    try:
        Connection(s, auto_bind=True, client_strategy=STRATEGY_SYNC,
                    user=user_dn, password=v, authentication=AUTH_SIMPLE,
                    check_names=True)
    except:
        output = 'Inactive'
        break

if output != 'Inactive':
    output = 'Active'

result = {'result': output}

print(json.JSONEncoder().encode(result))
print('\n')
