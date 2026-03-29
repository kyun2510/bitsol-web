#!/bin/bash

# 문의하기 통합 테스트 스크립트
# 사용: bash test_inquiry.sh

echo "=========================================="
echo "   문의하기 기능 통합 테스트 시작"
echo "=========================================="
echo ""

# 변수 설정
API_URL="http://localhost:6006/v1"
TEST_NAME="테스트_$(date +%Y%m%d_%H%M%S)"

echo "[1/3] API 서버 연결 확인..."
if ! curl -s "$API_URL/quickcontact/" > /dev/null 2>&1; then
    echo "❌ API 서버에 연결할 수 없습니다."
    echo "    → 백엔드 서버를 시작하세요: cd 코드/backend && node app/index.js"
    exit 1
fi
echo "✅ API 서버 정상 작동 확인"
echo ""

echo "[2/3] 문의하기 데이터 제출..."
RESPONSE=$(curl -s -X POST "$API_URL/quickcontact/post" \
  -H "Content-Type: application/json" \
  -d "{
    \"qc_name\": \"$TEST_NAME\",
    \"qc_phone\": \"010-1111-2222\",
    \"qc_field\": \"고등학생\",
    \"qc_location\": \"빛솔본점\",
    \"qc_email\": \"test@test.com\"
  }")

if [ -z "$RESPONSE" ]; then
    echo "❌ 요청 실패"
    exit 1
fi

echo "✅ 데이터 제출 완료"
echo "   응답: $RESPONSE"
echo ""

echo "[3/3] 관리자 목록에 데이터 확인..."
echo ""
echo "📌 다음 명령을 실행하여 관리자 목록 확인:"
echo ""
echo "curl -s '$API_URL/super/inquiry/all' | jq '.[] | select(.cst_title | contains(\"'$TEST_NAME'\"))'"
echo ""
echo "또는 관리자 페이지에서 문의 목록 탭 확인:"
echo "  → 문의제목: $TEST_NAME"
echo "  → 연락처: 010-1111-2222"
echo "  → 이메일: test@test.com"
echo ""

echo "=========================================="
echo "   테스트 완료"
echo "=========================================="
