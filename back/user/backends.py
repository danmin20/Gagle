import dataclasses
import typing
import uuid

import requests
from django.contrib.auth import authenticate, backends as django, get_user_model
from django.core.exceptions import ValidationError
from django.db import transaction
from django.db.models import Prefetch
from rest_framework import authentication

# from back.user.models import User


class KakaoAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request, **kwargs):
        UserModel = get_user_model()

        access_token = request.data["response"]["access_token"]
        response = requests.get(
            "https://kapi.kakao.com/v1/user/access_token_info",
            headers={"Authorization": f"Bearer :{access_token}"},
        ).json()

        user_kakao_id = response["id"]
        app_id = response["app_id"]
        if app_id != 466893:  # 상수
            raise Exception("인증 문제가 발생했습니다.")

        user, _ = UserModel.objects.get_or_create(kakao_id=user_kakao_id)
        return user

    def get_user(self, user_id):
        try:
            user = get_user_model().objects.get(id=user_id)
        except get_user_model().DoesNotExist:
            user = None
        return user